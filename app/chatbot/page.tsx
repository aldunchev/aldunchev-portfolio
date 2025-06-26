"use client";

import { useState, useEffect } from "react";

export default function ChatbotPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide loading after a reasonable time as fallback
    const fallbackTimer = setTimeout(() => {
      setIsLoading(false);
    }, 15000); // 15 seconds fallback

    // Function to handle when Gradio app finishes rendering
    const handleLoadComplete = () => {
      console.log("Embedded space has finished rendering");
      setIsLoading(false);
    };

    // Check for gradio app and add event listener
    const checkForGradioApp = () => {
      const gradioApp = document.querySelector("gradio-app");
      if (gradioApp) {
        gradioApp.addEventListener("render", handleLoadComplete);
        return gradioApp;
      }
      return null;
    };

    // Try to find gradio app immediately
    let gradioApp = checkForGradioApp();

    // If not found, keep checking periodically
    let intervalId: NodeJS.Timeout | null = null;
    if (!gradioApp) {
      intervalId = setInterval(() => {
        gradioApp = checkForGradioApp();
        if (gradioApp && intervalId) {
          clearInterval(intervalId);
          intervalId = null;
        }
      }, 500); // Check every 500ms
    }

    return () => {
      clearTimeout(fallbackTimer);
      if (intervalId) {
        clearInterval(intervalId);
      }
      if (gradioApp) {
        gradioApp.removeEventListener("render", handleLoadComplete);
      }
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">AI Assistant</h1>
        <p className="text-gray-600 mb-8">
          Chat with my AI assistant. This is a full-page version for better
          usability.
        </p>

        {/* Loading Indicator */}
        {isLoading && (
          <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-8 mb-6">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="relative">
                <div className="w-12 h-12 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Loading AI Assistant...
                </h3>
                <p className="text-gray-500 text-sm">
                  Please wait while we initialize the chatbot interface
                </p>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-green-500 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Gradio App Container */}
        <div
          className={`w-full transition-opacity duration-500 ${isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"}`}
        >
          <div
            className="w-full min-h-[600px]"
            dangerouslySetInnerHTML={{
              __html:
                '<gradio-app src="https://aldunchev-chatbot.hf.space" eager="true"></gradio-app>',
            }}
          />
        </div>

        <div className="mt-6 text-sm text-gray-500">
          <p>
            This chatbot is powered by Gradio and Hugging Face Spaces. For the
            modal version, check the chatbot button in the bottom-right corner
            of other pages.
          </p>
        </div>
      </div>
    </div>
  );
}
