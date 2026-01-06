'use client';

import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { api } from '@/app/lib/utils/api';
import { Item } from 'pluggy-sdk';

const PluggyConnect = dynamic(
  () => import('react-pluggy-connect').then((mod) => mod.PluggyConnect),
  { 
    ssr: false,
    loading: () => null,
  }
);

interface ConnectButtonProps {
  userId?: string;
  onSuccess: () => void;
  onError: (message: string) => void;
}

export function ConnectButton({ userId, onSuccess, onError }: ConnectButtonProps) {
  const [connectToken, setConnectToken] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOpenConnect = async () => {
    setIsLoading(true);
    try {
      const { data } = await api.post('/api/token', 
        userId ? { userId } : {},
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setConnectToken(data.accessToken);
      setIsOpen(true);
    } catch (error) {
      console.error('Error creating token:', error);
      onError('Failed to create connect token');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSuccess = async (data: { item: Item }) => {      
      setIsOpen(false);
      onSuccess();
  };

  const handleError = (error: { message?: string; code?: string }) => {
    console.error('Pluggy Connect error:', error);
    onError(error.message || 'Connection failed');
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
    setConnectToken(null);
  };

  return (
    <>
      <Button 
        onClick={handleOpenConnect} 
        colorScheme="red"
        size="lg"
        loading={isLoading}
        loadingText="Conectando..."
        fontWeight="600"
        px={6}
        borderRadius="lg"
        _hover={{
          transform: "translateY(-1px)",
          shadow: "md",
        }}
        transition="all 0.2s"
      >
        Conectar conta
      </Button>

      {typeof window !== 'undefined' && connectToken && isOpen && (
        <PluggyConnect
          connectToken={connectToken}
          includeSandbox={true}
          onSuccess={handleSuccess}
          onError={handleError}
          onClose={handleClose}
        />
      )}
    </>
  );
}