import React, { ReactNode } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode,
  fallback?: ReactNode
};

type ErrorBoundaryState = {
  hasError: boolean
};

const DEFAULT_FALLBACK = <div>Oh no! We ran into an error. Please refresh to continue.</div>

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    console.error(error, info.componentStack);
  }

  render() {
    const { children, fallback = DEFAULT_FALLBACK } = this.props;
    const { hasError} = this.state;

    return hasError ? fallback : children;
  }
}