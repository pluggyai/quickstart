'use client';

import React, { Component, ReactNode } from 'react';
import { Box, Card, Text, Button, Heading } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <Box p={8}>
          <Card.Root p={6}>
            <Heading size="lg" color="red.600" mb={4}>
              Something went wrong
            </Heading>
            <Text color="gray.600" mb={4}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Text>
            <Button onClick={this.handleReset} colorScheme="red">
              Try Again
            </Button>
          </Card.Root>
        </Box>
      );
    }

    return this.props.children;
  }
}