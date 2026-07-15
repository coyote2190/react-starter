import { Component } from 'react';

import i18n from '@/config/i18n';

import type { ErrorBoundaryProps, ErrorBoundaryState } from './errorBoundary.types';
import styles from './errorBoundary.module.css';

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.errorBoundary}>
          <h1>{i18n.t('error.title')}</h1>
          <p>{i18n.t('error.serverError')}</p>
          <button type="button" onClick={() => window.location.reload()}>
            {i18n.t('common.reload')}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
