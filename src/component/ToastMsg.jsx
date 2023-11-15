import React, { useEffect } from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function ToastMsg({ toastMsgState, text }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      toastMsgState(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [toastMsgState]);

  return (
    <div className="fixed right-0 bg-green-600 p-4 top-20 w-80 text-lg z-50">
      <p className="flex items-center">
        <FiAlertCircle className="mx-2" />
        {text}
      </p>
    </div>
  );
}
