import type { MasterClass } from '../types';

export const mockMasterClasses: MasterClass[] = [
  {
    id: '1',
    name: 'Web Development Fundamentals',
    instructor: 'John Doe',
    videos: [
      {
        id: '1-1',
        title: 'Introduction to HTML',
        duration: '15:30',
        description:
          'Learn the basics of HTML structure and semantic elements.',
        videoUrl: 'https://example.com/html-intro',
      },
      {
        id: '1-2',
        title: 'CSS Styling Basics',
        duration: '22:45',
        description: 'Understanding CSS selectors, properties, and layouts.',
        videoUrl: 'https://example.com/css-basics',
      },
      {
        id: '1-3',
        title: 'JavaScript Fundamentals',
        duration: '28:15',
        description:
          'Variables, functions, and DOM manipulation in JavaScript.',
        videoUrl: 'https://example.com/js-fundamentals',
      },
    ],
  },
  {
    id: '2',
    name: 'React Advanced Patterns',
    instructor: 'Jane Smith',
    videos: [
      {
        id: '2-1',
        title: 'Custom Hooks',
        duration: '35:20',
        description: 'Creating reusable logic with custom React hooks.',
        videoUrl: 'https://example.com/custom-hooks',
      },
      {
        id: '2-2',
        title: 'Context API Deep Dive',
        duration: '41:10',
        description: 'Advanced patterns for state management with Context.',
        videoUrl: 'https://example.com/context-api',
      },
      {
        id: '2-3',
        title: 'Performance Optimization',
        duration: '38:55',
        description: 'Techniques for optimizing React application performance.',
        videoUrl: 'https://example.com/performance',
      },
    ],
  },
  {
    id: '3',
    name: 'Node.js Backend Development',
    instructor: 'Mike Johnson',
    videos: [
      {
        id: '3-1',
        title: 'Express.js Setup',
        duration: '18:40',
        description: 'Setting up a basic Express.js server and routing.',
        videoUrl: 'https://example.com/express-setup',
      },
      {
        id: '3-2',
        title: 'Database Integration',
        duration: '32:25',
        description: 'Connecting and querying databases with Node.js.',
        videoUrl: 'https://example.com/database-integration',
      },
      {
        id: '3-3',
        title: 'Authentication & Security',
        duration: '45:30',
        description: 'Implementing secure authentication and authorization.',
        videoUrl: 'https://example.com/auth-security',
      },
    ],
  },
];
