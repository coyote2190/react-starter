import { type ReactNode, useState } from 'react';

import { ToastContext } from './toast.context';
import type { BaseToast, Toast } from './toast.types';
import styles from './toast.module.css';

let toastId = 0;

const toastTypeClass = (type: Required<BaseToast>['type']) =>
  `toast${type.charAt(0).toUpperCase()}${type.slice(1)}` as const;

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
          <div
            className={`${styles.toast} ${styles[toastTypeClass(toast.type ?? 'info')]}`}
            key={toast.id}
            role="alert"
          >
            {toast.title && <strong>{toast.title}</strong>}
            {toast.message && <p>{toast.message}</p>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
