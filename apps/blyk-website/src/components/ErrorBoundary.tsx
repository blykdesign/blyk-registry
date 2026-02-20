"use client"

import { Component, type ReactNode } from "react"

type Props = { children: ReactNode }
type State = { hasError: boolean; error?: Error }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-foreground">
          <h1 className="text-xl font-semibold">Algo deu errado</h1>
          <p className="mt-2 text-muted-foreground">
            Recarregue a página ou tente novamente mais tarde.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Recarregar
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
