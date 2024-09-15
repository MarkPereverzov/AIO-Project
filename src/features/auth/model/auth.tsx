'use client';
import { useState } from "react";

export const useAuth = () => {
  const [isLogin, setIsLogin] = useState(true); 
  const toggleLoginRegister = () => {
    setIsLogin(!isLogin);
  };

  return { isLogin, toggleLoginRegister };
}