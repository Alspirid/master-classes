import React from 'react';
import type { Video } from '../types';

interface MainContentProps {
  selectedVideo: Video | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div className="flex flex-1 items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
            <svg
              className="h-10 w-10 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="mb-2 text-xl font-semibold text-gray-700 dark:text-gray-300">
            No Video Selected
          </h3>
          <p className="max-w-md text-gray-500 dark:text-gray-400">
            Choose a video from the sidebar to start watching your master class
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-4xl p-6">
        {/* Video Player Area */}
        <div className="mb-6">
          <div className="mb-4 flex aspect-video items-center justify-center rounded-lg border bg-black dark:border-gray-700 dark:bg-gray-800">
            {/* Placeholder for video player */}
            <div className="text-center text-white">
              <svg
                className="mx-auto mb-4 h-16 w-16 opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-sm opacity-75">Video Player Placeholder</p>
              <p className="mt-1 text-xs opacity-50">
                URL: {selectedVideo.videoUrl}
              </p>
            </div>
          </div>
        </div>

        {/* Video Information */}
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {selectedVideo.title}
            </h1>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {selectedVideo.duration}
            </span>
          </div>

          <div className="prose max-w-none">
            <p className="leading-relaxed text-gray-600 dark:text-gray-300">
              {selectedVideo.description}
            </p>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-blue-700 dark:hover:bg-blue-600">
                Play Video
              </button>
              <button className="rounded-lg bg-gray-200 px-6 py-2 text-gray-700 transition-colors duration-200 hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                Add to Favorites
              </button>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span>Ready to watch</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
