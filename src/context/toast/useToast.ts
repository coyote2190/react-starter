import { useContext } from 'react';

import ToastContext from './toast.context';
import type { ToastContextType } from './toast.types';

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};
