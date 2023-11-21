import React, { useEffect, useState } from "react";
import { FiAlertCircle } from "react-icons/fi";

export default function ToastMsg({ toastMsgState, text }) {
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    if (toastMsgState) {
      setIsHidden(false);

      const timer = setTimeout(() => {
        setIsHidden(true);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [toastMsgState]);

  if (isHidden) {
    return null;
  }

  return (
    <div className="fixed right-0 bg-green-600 p-4 top-20 w-80 text-lg z-50">
      <p className="flex items-center">
        <FiAlertCircle className="mx-2" />
        {text}
      </p>
    </div>
  );
}
