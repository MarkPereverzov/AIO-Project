import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { RepWGroup } from './RepWGroup';

interface FieldConfig {
  name: string; // Название поля (ключ объекта)
  label: string; // Текст метки для поля
  type: 'text' | 'number' | 'textarea' | 'color' | 'array'; // Тип поля
}

interface EditModalProps<T> {
  show: boolean;
  title: string;
  fields: FieldConfig[];
  initialValues: T; // Начальные значения для редактирования
  onSave: (values: T) => Promise<void>; // Функция для сохранения
  onCancel: () => void; // Функция для отмены
}

export const EditModal = <T extends Record<string, any>>({
  show,
  title,
  fields,
  initialValues,
  onSave,
  onCancel,
}: EditModalProps<T>) => {
  const [values, setValues] = useState<T>(initialValues);

  const handleChange = (field: string, value: string | number) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleEdit = (id: number, field: string, value: string | number) => {
    setValues((prev) => {
      const updatedSets = prev.sets.map((set: any) =>
        set?.id === id ? { ...set, [field]: value } : set
      );
    
      const newState = {
        ...prev,
        sets: updatedSets,
      };
      return newState;
    });
  };

  const handleDelete = async (id: number) => {
    setValues((prev) => {
      const updatedSets = prev.sets.filter((set: any) => set?.id !== id);
    
      const newState = {
        ...prev,
        sets: updatedSets, // Обновляем только `sets`
      };
    
      return newState;
    });
  }

  const handleAdd = () => {
    setValues((prev) => {
      const updatedSets = [...prev.sets];
      prev.sets.push({id: updatedSets.reduce((max, x) => (x.id > max.id ? x : max)).id+1, weight: 0, reps: 0});

      const newState = {
        ...prev,
        sets: updatedSets,
      };
      return newState;
    });
  }

  const handleSave = async () => {
    await onSave(values);
  };

  return (
    <Modal show={show} onHide={onCancel} centered>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {fields.map((field) => (
            <Form.Group key={field.name} className="mb-3">
              <Form.Label>{field.label}</Form.Label>
                {field.type === 'textarea' ? (
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={values[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === 'color' ? (
                  <Form.Control
                    type="color"
                    value={values[field.name] || ''}
                    onChange={(e) => handleChange(field.name, e.target.value)}
                  />
                ) : field.type === 'array' ? (
                    <RepWGroup sets={values['sets']} onChange={handleEdit} onDelete={handleDelete} onAdd={handleAdd}/>
                ) : (
                  <Form.Control
                    type={field.type}
                    value={values[field.name] || ''}
                    onChange={(e) =>
                      handleChange(field.name, field.type === 'number' ? +e.target.value : e.target.value)
                    }
                  />
                )}
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Отмена
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Сохранить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
