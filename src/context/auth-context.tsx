"use client";
import { API_ENDPOINTS } from "@/services/utils/api-endpoints";
import http from "@/services/utils/http";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  email: string;
  username: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
}

const authContextDefaultValues: AuthContextType = {
  isAuthenticated: false,
  user: null,
};

const AuthContext = createContext<AuthContextType>(authContextDefaultValues);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await http.get(API_ENDPOINTS.IS_LOGIN_IN);
        const data = await response.data;
        setIsAuthenticated(data?.isLoggedIn);
        if (data?.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Error checking authentication status:", error);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};
