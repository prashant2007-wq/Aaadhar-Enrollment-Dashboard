import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'operator' | 'analyst';
  createdAt: string;
}
interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  isLoading: boolean;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check for existing session
    const savedUser = localStorage.getItem('aadhaar_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);
  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    // Demo credentials
    const demoUsers = [
      { email: 'admin@aadhaar.gov.in', password: 'admin123', name: 'Admin User', role: 'admin' as const },
      { email: 'operator@aadhaar.gov.in', password: 'operator123', name: 'Center Operator', role: 'operator' as const },
      { email: 'analyst@aadhaar.gov.in', password: 'analyst123', name: 'Data Analyst', role: 'analyst' as const },
    ];
    // Check stored users
    const storedUsers = JSON.parse(localStorage.getItem('aadhaar_users') || '[]');
    const allUsers = [...demoUsers, ...storedUsers];

    const foundUser = allUsers.find(u => u.email === email && u.password === password);

    if (foundUser) {
      const userSession: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        createdAt: new Date().toISOString(),
      };
      setUser(userSession);
      localStorage.setItem('aadhaar_user', JSON.stringify(userSession));
      return { success: true };
    }

    return { success: false, error: 'Invalid email or password' };
  };

  const signup = async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return { success: false, error: 'Invalid email format' };
    }

    // Validate password length
    if (password.length < 6) {
      return { success: false, error: 'Password must be at least 6 characters' };
    }

    // Check if user already exists
    const storedUsers = JSON.parse(localStorage.getItem('aadhaar_users') || '[]');
    const demoEmails = ['admin@aadhaar.gov.in', 'operator@aadhaar.gov.in', 'analyst@aadhaar.gov.in'];
    
    if (storedUsers.some((u: any) => u.email === email) || demoEmails.includes(email)) {
      return { success: false, error: 'Email already registered' };
    }

    // Create new user
    const newUser = {
      email,
      password,
      name,
      role: 'analyst' as const,
    };

    storedUsers.push(newUser);
    localStorage.setItem('aadhaar_users', JSON.stringify(storedUsers));

    // Auto login after signup
    const userSession: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      role: 'analyst',
      createdAt: new Date().toISOString(),
    };
    setUser(userSession);
    localStorage.setItem('aadhaar_user', JSON.stringify(userSession));

    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('aadhaar_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
