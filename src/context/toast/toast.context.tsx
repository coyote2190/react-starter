import { createContext } from 'react';

import type { ToastContextType } from './toast.types';

// eslint-disable-next-line react-refresh/only-export-components
export const ToastContext = createContext<ToastContextType | undefined>(undefined);

export default ToastContext;
