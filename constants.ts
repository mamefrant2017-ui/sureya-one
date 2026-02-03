
import { Course, Testimonial } from './types';

export const COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Theoretical Physics',
    description: 'Explore the foundations of the universe from quantum mechanics to relativity.',
    category: 'Science',
    duration: '12 Weeks',
    instructor: 'Dr. Sarah El-Amin',
    image: 'https://picsum.photos/seed/physics/800/600'
  },
  {
    id: '2',
    title: 'Digital Arts & Narrative Design',
    description: 'Master the tools of modern digital creation and visual storytelling.',
    category: 'Arts',
    duration: '8 Weeks',
    instructor: 'Prof. Julian Vane',
    image: 'https://picsum.photos/seed/arts/800/600'
  },
  {
    id: '3',
    title: 'Full-Stack Software Engineering',
    description: 'Build robust scalable applications using modern cloud architectures.',
    category: 'Technology',
    duration: '16 Weeks',
    instructor: 'Marcus Chen',
    image: 'https://picsum.photos/seed/tech/800/600'
  },
  {
    id: '4',
    title: 'Global Macroeconomics',
    description: 'Understanding market trends and economic policies in a globalized world.',
    category: 'Commerce',
    duration: '10 Weeks',
    instructor: 'Dr. Robert Sterling',
    image: 'https://picsum.photos/seed/econ/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aisha Rahman',
    role: 'Alumni, 2023',
    content: 'Sureya Academy transformed my approach to learning. The AI-integrated curriculum is truly ahead of its time.',
    avatar: 'https://i.pravatar.cc/150?u=aisha'
  },
  {
    id: '2',
    name: 'David Okafor',
    role: 'Current Student',
    content: 'The mentorship here is unparalleled. I feel prepared for the competitive tech landscape.',
    avatar: 'https://i.pravatar.cc/150?u=david'
  }
];
