"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated (check cookie for middleware compatibility)
    const checkAuth = () => {
      try {
        // Check cookie first (for middleware)
        const cookies = document.cookie.split(';');
        const authCookie = cookies.find(cookie => cookie.trim().startsWith('isAuthenticated='));
        const authStatus = authCookie ? authCookie.split('=')[1] : null;
        
        if (authStatus === "true") {
          setIsAuthenticated(true);
        } else {
          // Fallback to localStorage for client-side state
          const localAuth = localStorage.getItem("isAuthenticated");
          if (localAuth === "true") {
            setIsAuthenticated(true);
            // Sync to cookie
            document.cookie = "isAuthenticated=true; path=/; max-age=86400"; // 1 day
          }
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = () => {
    try {
      // Set both localStorage and cookie
      localStorage.setItem("isAuthenticated", "true");
      // Set cookie for middleware (1 day expiry)
      document.cookie = "isAuthenticated=true; path=/; max-age=86400";
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error setting authentication:", error);
    }
  };

  const logout = () => {
    try {
      localStorage.removeItem("isAuthenticated");
      // Remove cookie
      document.cookie = "isAuthenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error removing authentication:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

