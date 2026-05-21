export type Role = 'student' | 'teacher' | 'parent' | 'admin';
export type Level = 'prescolaire' | 'primaire' | 'college' | 'lycee';

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  level: Level;
  created_at?: string;
}