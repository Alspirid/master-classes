import React from 'react';
import type { MasterClass, Video } from '../types';

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
  return (
    <details className="group mb-2 rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-gray-800">
      <summary className="flex w-full cursor-pointer list-none items-center justify-between rounded-t-lg bg-gray-50 p-2 px-4 py-3 transition-colors duration-200 group-open:border-b group-open:border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-700 group-open:dark:border-gray-600 dark:hover:bg-gray-600 [&::-webkit-details-marker]:hidden">
        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100">
            {masterClass.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            by {masterClass.instructor}
          </p>
        </div>
        <svg
          className="h-5 w-5 transform text-gray-600 transition-transform duration-200 group-open:rotate-180 dark:text-gray-300"
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
      </summary>

      <div className="border-t border-gray-300 dark:border-gray-600">
        {masterClass.videos.map((video) => (
          <button
            key={video.id}
            onClick={() => onVideoSelect(video)}
            className={`w-full border-b border-gray-200 px-4 py-3 text-left transition-colors duration-200 last:rounded-b-lg last:border-b-0 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-gray-600 dark:hover:bg-blue-900/20 ${
              selectedVideoId === video.id
                ? 'border-l-4 border-l-blue-500 bg-blue-100 dark:bg-blue-900/30'
                : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="mb-1 font-medium text-gray-800 dark:text-gray-100">
                  {video.title}
                </h4>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
                  {video.description}
                </p>
              </div>
              <span className="ml-2 text-xs whitespace-nowrap text-gray-500 dark:text-gray-400">
                {video.duration}
              </span>
            </div>
          </button>
        ))}
      </div>
    </details>
  );
};

export default Accordion;
