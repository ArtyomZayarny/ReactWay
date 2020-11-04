import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Counter from './Counter'

export default function ErrorBoundaryExample(props) {


    return (
        <>
            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>

            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>

            <ErrorBoundary>
                <Counter />
            </ErrorBoundary>
        </>
    )
}
