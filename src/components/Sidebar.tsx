import React from 'react';
import type { MasterClass, Video } from '../types';
import Accordion from './Accordion';
import ThemeToggle from './ThemeToggle';

interface SidebarProps {
  masterClasses: MasterClass[];
  onVideoSelect: (video: Video) => void;
  selectedVideoId?: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  masterClasses,
  onVideoSelect,
  selectedVideoId,
}) => {
  return (
    <div className="h-screen w-120 overflow-y-auto border-r border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800">
      <div className="border-b border-gray-300 bg-gray-50 p-4 dark:border-gray-600 dark:bg-gray-700">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Master Classes
          </h2>
          <ThemeToggle />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Choose a video to start learning
        </p>
      </div>

      <div className="space-y-2 p-4">
        {masterClasses.map((masterClass) => (
          <Accordion
            key={masterClass.id}
            masterClass={masterClass}
            onVideoSelect={onVideoSelect}
            selectedVideoId={selectedVideoId}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
