import React from "react";
import type { Video } from "../types";

interface MainContentProps {
  selectedVideo: Video | null;
}

const MainContent: React.FC<MainContentProps> = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return (
      <div
        className="flex-1 flex items-center justify-center bg-gray-50 
                      dark:bg-gray-900"
      >
        <div className="text-center">
          <div
            className="w-24 h-24 mx-auto mb-4 bg-gray-300 dark:bg-gray-600 
                          rounded-full flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-gray-500 dark:text-gray-400"
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
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            No Video Selected
          </h3>
          <p className="text-gray-500 dark:text-gray-400 max-w-md">
            Choose a video from the sidebar to start watching your master class
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="max-w-4xl mx-auto p-6">
        {/* Video Player Area */}
        <div className="mb-6">
          <div
            className="aspect-video bg-black dark:bg-gray-800 rounded-lg mb-4 
                          flex items-center justify-center border dark:border-gray-700"
          >
            {/* Placeholder for video player */}
            <div className="text-center text-white">
              <svg
                className="w-16 h-16 mx-auto mb-4 opacity-75"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-sm opacity-75">Video Player Placeholder</p>
              <p className="text-xs opacity-50 mt-1">
                URL: {selectedVideo.videoUrl}
              </p>
            </div>
          </div>
        </div>

        {/* Video Information */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {selectedVideo.title}
            </h1>
            <span
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 
                           dark:text-blue-200 text-sm font-medium px-3 py-1 
                           rounded-full"
            >
              {selectedVideo.duration}
            </span>
          </div>

          <div className="prose max-w-none">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {selectedVideo.description}
            </p>
          </div>
        </div>

        {/* Additional Controls */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex space-x-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 
                               dark:hover:bg-blue-600 text-white px-6 py-2 
                               rounded-lg transition-colors duration-200 
                               focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Play Video
              </button>
              <button
                className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 
                               dark:hover:bg-gray-600 text-gray-700 
                               dark:text-gray-300 px-6 py-2 rounded-lg 
                               transition-colors duration-200 focus:outline-none 
                               focus:ring-2 focus:ring-gray-500"
              >
                Add to Favorites
              </button>
            </div>

            <div
              className="flex items-center space-x-2 text-sm text-gray-500 
                            dark:text-gray-400"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
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
