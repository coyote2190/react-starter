import { type ReactNode, useState } from 'react';

import { ToastContext } from './toast.context';
import { StyledToastContainer } from './toast.styles';
import type { BaseToast, Toast } from './toast.types';

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
      <StyledToastContainer>
        {toasts.map((toast) => (
          <div key={toast.id}>alert</div>
        ))}
      </StyledToastContainer>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
