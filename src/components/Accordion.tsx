import { useState } from "react";
import type { MasterClass, Video } from "../types";

interface AccordionProps {
  masterClass: MasterClass;
  onVideoSelect: (video: Video) => void;
  selectedVideoId?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  masterClass,
  onVideoSelect,
  selectedVideoId,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="border border-gray-300 dark:border-gray-600 rounded-lg mb-2 
                    bg-white dark:bg-gray-800"
    >
      <button
        onClick={toggleAccordion}
        className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-700 
                   hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors 
                   duration-200 rounded-t-lg flex justify-between items-center 
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">
            {masterClass.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            by {masterClass.instructor}
          </p>
        </div>
        <svg
          className={`w-5 h-5 transform transition-transform duration-200 
                     text-gray-600 dark:text-gray-300 ${
                       isOpen ? "rotate-180" : ""
                     }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="border-t border-gray-300 dark:border-gray-600">
          {masterClass.videos.map((video) => (
            <button
              key={video.id}
              onClick={() => onVideoSelect(video)}
              className={`w-full px-4 py-3 text-left hover:bg-blue-50 
                         dark:hover:bg-blue-900/20 transition-colors duration-200 
                         border-b border-gray-200 dark:border-gray-600 
                         last:border-b-0 last:rounded-b-lg focus:outline-none 
                         focus:ring-2 focus:ring-blue-500 ${
                           selectedVideoId === video.id
                             ? "bg-blue-100 dark:bg-blue-900/30 border-l-4 border-l-blue-500"
                             : ""
                         }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800 dark:text-gray-100 mb-1">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                    {video.description}
                  </p>
                </div>
                <span
                  className="text-xs text-gray-500 dark:text-gray-400 
                               ml-2 whitespace-nowrap"
                >
                  {video.duration}
                </span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
