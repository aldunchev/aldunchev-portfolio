"use client";

import { useState } from "react";

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "gradio-app": {
        src: string;
      };
    }
  }
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return null;
}
