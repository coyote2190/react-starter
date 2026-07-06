import { type ReactNode, useState } from 'react';

import { ToastContext } from './toast.context';
import type { BaseToast, Toast } from './toast.types';
import styles from './toast.module.css';

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const TOAST_DURATION = 3000;

  const showToast = ({ message, title, type = 'info' }: BaseToast) => {
    const id = ++toastId;
    setToasts((prev) => [...prev, { id, message, title, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, TOAST_DURATION);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={styles.toastContainer}>
        {toasts.map((toast) => (
          <div key={toast.id}>alert</div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
