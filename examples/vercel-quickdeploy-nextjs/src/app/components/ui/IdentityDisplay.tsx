'use client';

import { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Text,
  Flex,
  Stack,
  Spinner,
  Badge,
  Heading,
} from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';
import type { IdentityRecord } from '@/app/types/pluggy';

interface IdentityDisplayProps {
  itemId: string;
}

const formatDate = (dateString?: string | null) => {
  if (!dateString) return 'N/A';
  return new Date(dateString).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

const formatDocument = (document?: string, type?: string) => {
  if (!document) return 'N/A';
  
  const cleaned = document.replace(/[^\d]/g, '');
  
  if (type === 'CPF' && cleaned.length === 11) {
    return cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  }
  
  if (type === 'CNPJ' && cleaned.length === 14) {
    return cleaned.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  }
  
  return document;
};

interface Address {
  city?: string;
  type?: string;
  state?: string;
  country?: string;
  postalCode?: string;
  fullAddress?: string;
  primaryAddress?: string;
}

interface PhoneNumber {
  type?: string;
  value: string;
}

interface Email {
  type?: string;
  value: string;
}

interface Relation {
  name?: string;
  type?: string;
  document?: string | null;
}

export function IdentityDisplay({ itemId }: IdentityDisplayProps) {
  const [identity, setIdentity] = useState<IdentityRecord | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!itemId) {
      setIsLoading(false);
      setIdentity(null);
      return;
    }

    const fetchIdentity = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const { data } = await api.get('/api/identity', {
          params: { itemId },
        });
        
        setIdentity(data.data);
      } catch (err: unknown) {
        const axiosError = err as { response?: { status?: number } };
  
        if (axiosError.response?.status === 404) {
          setIdentity(null);
        } else {
          console.error('Error fetching identity:', err);
          setError(err instanceof Error ? err.message : 'Failed to load identity');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchIdentity();
  }, [itemId]);

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="300px" direction="column" gap={4}>
        <Spinner size="xl" color="red.500" />
        <Text color="gray.500" fontSize="sm" fontWeight="500">
          Carregando informações de identidade...
        </Text>
      </Flex>
    );
  }

  if (error) {
    return (
      <Card.Root 
        p={8}
        borderRadius="xl"
        borderWidth="1px"
        borderColor="red.200"
        bg="red.50"
        textAlign="center"
      >
        <Text color="red.600" fontWeight="600" mb={2}>
          Erro ao carregar identidade
        </Text>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
      </Card.Root>
    );
  }

  if (!identity) {
    return (
      <Card.Root 
        p={12}
        borderRadius="xl"
        borderWidth="2px"
        borderColor="gray.200"
        borderStyle="dashed"
        bg="gray.50"
        textAlign="center"
      >
        <Box mb={4}>
          <Text fontSize="4xl" mb={2}>👤</Text>
        </Box>
        <Heading size="md" mb={2} color="gray.700" fontWeight="600">
          Informações de identidade não disponíveis
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Este item ainda não possui informações de identidade registradas
        </Text>
      </Card.Root>
    );
  }

  const addresses = identity.addresses as Address[] | undefined;
  const phoneNumbers = identity.phone_numbers as PhoneNumber[] | undefined;
  const emails = identity.emails as Email[] | undefined;
  const relations = identity.relations as Relation[] | undefined;

  return (
    <Card.Root 
      p={5}
      borderRadius="xl"
      borderWidth="1px"
      borderColor="gray.200"
      bg="white"
      shadow="sm"
    >
      <Stack gap={4}>
        {/* Basic Information */}
        <Box>
          <Text fontSize="xs" fontWeight="700" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={3}>
            {identity.full_name ? 'Informações Pessoais' : 'Informações da Empresa'}
          </Text>
          
          <Box
            display="grid"
            gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
            gap={3}
          >
            {identity.full_name && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>Nome Completo</Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">{identity.full_name}</Text>
              </Box>
            )}

            {identity.company_name && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>Nome da Empresa</Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">{identity.company_name}</Text>
              </Box>
            )}

            {identity.document && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>
                  {identity.document_type || 'Documento'}
                </Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">
                  {formatDocument(identity.document, identity.document_type)}
                </Text>
              </Box>
            )}

            {identity.tax_number && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>Número de identificação fiscal</Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">{identity.tax_number}</Text>
              </Box>
            )}

            {identity.birth_date && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>Data de nascimento</Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">{formatDate(identity.birth_date)}</Text>
              </Box>
            )}

            {identity.job_title && (
              <Box>
                <Text fontSize="xs" fontWeight="600" color="gray.500" mb={1}>Cargo</Text>
                <Text fontWeight="600" color="gray.900" fontSize="sm">{identity.job_title}</Text>
              </Box>
            )}
          </Box>
        </Box>

        {/* Contact Information */}
        {((emails && emails.length > 0) || (phoneNumbers && phoneNumbers.length > 0)) && (
          <>
            <Box height="1px" bg="gray.200" my={1} />
            <Box>
              <Text fontSize="xs" fontWeight="700" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={3}>
                Informações de Contato
              </Text>
              
              <Stack gap={2.5}>
                {emails && emails.map((email, index) => (
                  <Box key={index}>
                    <Text fontSize="xs" fontWeight="600" color="gray.500" mb={0.5}>
                      E-mail {email.type ? `(${email.type})` : ''}
                    </Text>
                    <Text fontWeight="600" color="gray.900" fontSize="sm">{email.value}</Text>
                  </Box>
                ))}

                {phoneNumbers && phoneNumbers.map((phone, index) => (
                  <Box key={index}>
                    <Text fontSize="xs" fontWeight="600" color="gray.500" mb={0.5}>
                      Número de telefone {phone.type ? `(${phone.type})` : ''}
                    </Text>
                    <Text fontWeight="600" color="gray.900" fontSize="sm">{phone.value}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </>
        )}

        {/* Addresses */}
        {addresses && addresses.length > 0 && (
          <>
            <Box height="1px" bg="gray.200" my={1} />
            <Box>
              <Text fontSize="xs" fontWeight="700" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={3}>
                Endereços
              </Text>
              
              <Stack gap={2}>
                {addresses.map((address, index) => (
                  <Box
                    key={index} 
                    p={2.5}
                    bg="gray.50" 
                    borderRadius="md"
                    borderWidth="1px"
                    borderColor="gray.200"
                  >
                    <Flex gap={2} align="start" mb={1}>
                      {address.type && (
                        <Badge colorScheme="blue" px={1.5} py={0.5} borderRadius="full" fontWeight="600" fontSize="2xs" flexShrink={0}>
                          {address.type}
                        </Badge>
                      )}
                      <Box flex={1}>
                        <Text fontSize="sm" color="gray.900" fontWeight="500">
                          {address.fullAddress || address.primaryAddress || 'Sem detalhes do endereço'}
                        </Text>
                        {address.city && address.state && (
                          <Text fontSize="xs" color="gray.600" mt={0.5}>
                            {address.city}, {address.state}
                            {address.postalCode && ` - ${address.postalCode}`}
                          </Text>
                        )}
                      </Box>
                    </Flex>
                  </Box>
                ))}
              </Stack>
            </Box>
          </>
        )}

        {/* Relations */}
        {relations && relations.length > 0 && (
          <>
            <Box height="1px" bg="gray.200" my={1} />
            <Box>
              <Text fontSize="xs" fontWeight="700" color="gray.500" textTransform="uppercase" letterSpacing="wide" mb={3}>
                Relações
              </Text>
              
              <Stack gap={2}>
                {relations.map((relation, index) => (
                  <Flex key={index} justify="space-between" align="center">
                    <Flex gap={2} align="center">
                      <Text fontWeight="600" color="gray.900" fontSize="sm">{relation.name || 'Desconhecido'}</Text>
                      {relation.type && (
                        <Badge size="sm" colorScheme="purple" px={2} py={0.5} borderRadius="full" fontWeight="600" fontSize="2xs">
                          {relation.type}
                        </Badge>
                      )}
                    </Flex>
                    {relation.document && (
                      <Text fontSize="xs" color="gray.600" fontWeight="500">
                        {relation.document}
                      </Text>
                    )}
                  </Flex>
                ))}
              </Stack>
            </Box>
          </>
        )}
      </Stack>
    </Card.Root>
  );
}