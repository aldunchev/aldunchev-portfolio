import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Chatbot",
  description: "Chat with my AI assistant",
};

export default function ChatbotPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">AI Assistant</h1>
        <p className="text-gray-600 mb-8">
          Chat with my AI assistant. This is a full-page version for better
          usability.
        </p>
        <div
          className="w-full"
          dangerouslySetInnerHTML={{
            __html:
              '<gradio-app src="https://aldunchev-chatbot.hf.space" eager="true"></gradio-app>',
          }}
        />

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
