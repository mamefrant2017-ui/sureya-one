
export interface Course {
  id: string;
  title: string;
  description: string;
  category: 'Science' | 'Arts' | 'Technology' | 'Commerce';
  duration: string;
  instructor: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
