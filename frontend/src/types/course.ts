import { Level } from './user';

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  video_url?: string;
  content?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  level: Level;
  subject: string;
  teacher_id: string;
  lessons?: Lesson[]; // Un cours peut contenir un tableau de leçons
  created_at?: string;
}