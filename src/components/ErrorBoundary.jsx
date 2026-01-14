import React from 'react';
import './styles/ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to console in development
    const isDevelopment = import.meta.env.DEV;
    if (isDevelopment) {
      console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    }
    
    // Aquí se podría integrar un servicio de logging como Sentry
    // if (import.meta.env.PROD) {
    //   Sentry.captureException(error, { contexts: { react: { componentStack: errorInfo.componentStack } } });
    // }
    
    this.setState({
      error,
      errorInfo
    });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" role="alert" aria-live="assertive">
          <h1>⚠️ Algo salió mal</h1>
          <p>
            Lo sentimos, ha ocurrido un error inesperado. Por favor, recarga la página o intenta más tarde.
          </p>
          <button
            onClick={this.handleReset}
            aria-label="Intentar de nuevo"
          >
            Intentar de nuevo
          </button>
          {import.meta.env.DEV && this.state.error && (
            <details className="error-details">
              <summary>Detalles del error (solo desarrollo)</summary>
              <pre>
                {this.state.error && this.state.error.toString()}
                <br />
                {this.state.errorInfo?.componentStack}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
