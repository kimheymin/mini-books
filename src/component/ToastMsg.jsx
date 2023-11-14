import React, { useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function ToastMsg({ setLike, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLike(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [setLike]);

  return (
    <div className="fixed right-0 bg-green-600 p-4 top-20 w-80 text-lg z-50">
      <p className="flex items-center">
        <FiAlertCircle className="mx-2" />
        {text}
      </p>
    </div>
  );
}
