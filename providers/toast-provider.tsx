"use client";

import { Toaster } from "react-hot-toast";

export const ToasterProvider = () => {
  return <Toaster position="top-left" reverseOrder={false} />;
};
