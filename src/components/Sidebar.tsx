import React from "react";
import type { MasterClass, Video } from "../types";
import Accordion from "./Accordion";
import ThemeToggle from "./ThemeToggle";

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
    <div
      className="w-80 bg-white dark:bg-gray-800 border-r border-gray-300 
                    dark:border-gray-600 h-screen overflow-y-auto"
    >
      <div
        className="p-4 border-b border-gray-300 dark:border-gray-600 
                      bg-gray-50 dark:bg-gray-700"
      >
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            Master Classes
          </h2>
          <ThemeToggle />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Choose a video to start learning
        </p>
      </div>

      <div className="p-4 space-y-2">
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
