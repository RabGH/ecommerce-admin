"use client";

import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);


// Hydration error, useEffect is for client and returns null if it's server, pre-caution
// Using client components in server files
  if (!isMounted) {
    return null;
  }
};
