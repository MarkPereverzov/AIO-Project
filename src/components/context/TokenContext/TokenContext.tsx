import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

// Определяем типы для контекста
interface TokenContextType {
  accessToken: string | null;
  refreshToken: string | null;
  saveTokens: (accessToken: string, refreshToken: string) => void;
  clearTokens: () => void;
  loadTokens: () => void;
}

// Создаем контекст с типами (по умолчанию null)
const TokenContext = createContext<TokenContextType | null>(null);

// Провайдер для токенов
interface TokenProviderProps {
  children: ReactNode;
}

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);

  // Метод для сохранения токенов
  const saveTokens = (newAccessToken: string, newRefreshToken: string) => {
    setAccessToken(newAccessToken);
    setRefreshToken(newRefreshToken);
    // Сохранение в localStorage (если требуется)
    localStorage.setItem('accessToken', newAccessToken);
    localStorage.setItem('refreshToken', newRefreshToken);
  };

  // Метод для очистки токенов
  const clearTokens = () => {
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  // Метод для загрузки токенов из localStorage
  const loadTokens = () => {
    const storedAccessToken = localStorage.getItem('accessToken');
    const storedRefreshToken = localStorage.getItem('refreshToken');
    if (storedAccessToken || storedRefreshToken) {
      setAccessToken(storedAccessToken);
      setRefreshToken(storedRefreshToken);
    }
  };

  return (
    <TokenContext.Provider value={{ accessToken, refreshToken, saveTokens, clearTokens, loadTokens }}>
      {children}
    </TokenContext.Provider>
  );
};

// Хук для использования токенов
export const useToken = (): TokenContextType => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};