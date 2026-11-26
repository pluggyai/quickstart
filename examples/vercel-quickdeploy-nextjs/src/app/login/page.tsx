'use client';

import { useState } from 'react';
import { Box, Button, Card, Heading, Input, Text } from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';

// Demo sign-in with the APP_ACCESS_CODE set at deploy time.
// Replace it with your own authentication (see README → "Authentication").
export default function LoginPage() {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      await api.post('/api/session', { accessCode });
      window.location.assign('/');
    } catch (err) {
      const status = (err as { response?: { status?: number } })?.response?.status;
      setError(
        status === 503
          ? 'Esta instalação ainda não foi configurada (APP_ACCESS_CODE / SESSION_SECRET).'
          : 'Código de acesso inválido.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box minH="100vh" bg="gray.50" display="flex" alignItems="center" justifyContent="center" px={4}>
      <Card.Root p={8} borderRadius="xl" maxW="400px" w="100%" bg="white">
        <form onSubmit={handleSubmit}>
          <Heading size="lg" mb={2}>
            Pluggy Financial Dashboard
          </Heading>
          <Text color="gray.600" fontSize="sm" mb={6}>
            Digite o código de acesso definido em APP_ACCESS_CODE.
          </Text>
          <Input
            type="password"
            autoComplete="current-password"
            placeholder="Código de acesso"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            mb={4}
          />
          {error && (
            <Text color="red.600" fontSize="sm" mb={4}>
              {error}
            </Text>
          )}
          <Button type="submit" colorScheme="red" w="100%" loading={isLoading} disabled={!accessCode}>
            Entrar
          </Button>
        </form>
      </Card.Root>
    </Box>
  );
}
