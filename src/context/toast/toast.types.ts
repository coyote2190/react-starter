export type BaseToast = {
  message?: string;
  type?: 'info' | 'success' | 'error' | 'warning';
  title?: string;
};

export type Toast = BaseToast & {
  id: number;
};

export type ToastContextType = {
  showToast: (toast: BaseToast) => void;
};
