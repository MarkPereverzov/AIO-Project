import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { useToken } from '../TokenContext/TokenContext';

// Определяем типы для контекста
interface UserContextType {
  email: string | null;
  name: string | null;
  userId: string | null;
  userLogo: string | null;
  updateInfo: () => void;
}

// Создаем контекст с типами (по умолчанию null)
const UserContext = createContext<UserContextType | null>(null);

// Провайдер для UserInfo
interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [email, setEmail] = useState<string | null>(null);
  const [name, setName] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [userLogo, setUserLogo] = useState<string | null>(null);
  const {accessToken} = useToken();

  const updateInfo = async () => {
    const url = 'http://localhost:3001';
    try {
        if (!accessToken) {
            throw new Error('Token is missing');
        }
        console.log(`${url}/user/info`);
        const response = await fetch(`${url}/user/info`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            }
        });
        console.log(response);
        const data = await response.json();

        setEmail(data.email);
        setName(data.name);
        setUserId(data.userId);
        setUserLogo(data.userLogo);
    } catch (error) {
        console.error('Failed to fetch user info', error);
    }
  };

  useEffect(() => {
    if(accessToken) {
        updateInfo();
    }
  }, [accessToken]);

  return (
    <UserContext.Provider value={{ email, name, userId, userLogo, updateInfo }}>
      {children}
    </UserContext.Provider>
  );
};

// Хук для использования userInfo
export const useUserInfo = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserInfo must be used within a UserProvider');
  }
  return context;
};