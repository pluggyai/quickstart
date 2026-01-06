"use client";

import { useEffect, useState, useCallback } from "react";
import {
  Box,
  Card,
  Text,
  Flex,
  Badge,
  Stack,
  Spinner,
  Heading,
  Button,
  Image,
} from "@chakra-ui/react";
import { api } from "@/app/lib/utils/api";
import { DeleteItemButton } from "./DeleteItemButton";
import type { PluggyItemRecord } from "@/app/types/pluggy";

const formatRelativeTime = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return 'agora';
  if (diffMins < 60) return `há ${diffMins} ${diffMins === 1 ? 'minuto' : 'minutos'}`;
  if (diffHours < 24) return `há aproximadamente ${diffHours} ${diffHours === 1 ? 'hora' : 'horas'}`;
  if (diffDays < 7) return `há ${diffDays} ${diffDays === 1 ? 'dia' : 'dias'}`;
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};

interface PaginationInfo {
  page: number;
  pageSize: number;
  totalPages: number;
  totalRecords: number;
}

interface ItemsListProps {
  userId?: string;
  onItemSelect?: (item: PluggyItemRecord) => void;
  refreshTrigger?: number;
}

export function ItemsList({
  userId,
  onItemSelect,
  refreshTrigger,
}: ItemsListProps) {
  const [items, setItems] = useState<PluggyItemRecord[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<PaginationInfo>({
    page: 1,
    pageSize: 10,
    totalPages: 1,
    totalRecords: 0,
  });
  const [currentPage, setCurrentPage] = useState(1);

  const fetchItems = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const { data } = await api.get("/api/items", {
        params: { userId },
      });

      setItems(Array.isArray(data.data?.results) ? data.data.results : []);
    } catch (err) {
      console.error("Error fetching items:", err);
      setError(err instanceof Error ? err.message : "Failed to load items");
      setItems([]);
    } finally {
      setIsLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems, refreshTrigger]);

  const handleDeleteSuccess = () => {
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, [fetchItems, refreshTrigger]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return (
      <Flex justify="center" align="center" minH="300px" direction="column" gap={4}>
        <Spinner size="xl" color="red.500" />
        <Text color="gray.500" fontSize="sm" fontWeight="500">
          Carregando contas...
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
          Erro ao carregar contas
        </Text>
        <Text color="red.500" fontSize="sm" mb={4}>
          {error}
        </Text>
        <Button 
          onClick={fetchItems} 
          size="sm"
          colorScheme="red"
          borderRadius="lg"
        >
          Tentar novamente
        </Button>
      </Card.Root>
    );
  }

  if (items.length === 0) {
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
          <Text fontSize="4xl" mb={2}>🏦</Text>
        </Box>
        <Heading size="md" mb={2} color="gray.700" fontWeight="600">
          Nenhuma conta conectada
        </Heading>
        <Text color="gray.500" fontSize="sm" maxW="400px" mx="auto">
          Conecte sua primeira conta para começar a visualizar seus dados financeiros
        </Text>
      </Card.Root>
    );
  }

  return (
    <Box>
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="xl" fontWeight="700" color="gray.900">
          Connected Accounts
        </Heading>
        <Text fontSize="sm" color="gray.600" fontWeight="500">
          {items.length} {items.length === 1 ? 'account' : 'accounts'}
        </Text>
      </Flex>

      <Stack gap={4}>
        {items.map((item) => (
          <Card.Root
            key={item.item_id}
            cursor="pointer"
            onClick={() => onItemSelect?.(item)}
            _hover={{ 
              shadow: "lg",
              transform: "translateY(-2px)",
            }}
            transition="all 0.2s ease-in-out"
            p={5}
            borderRadius="xl"
            borderWidth="1px"
            borderColor="gray.200"
            bg="white"
            shadow="sm"
          >
            <Flex justify="space-between" align="center" gap={4}>
              <Flex gap={4} align="center" flex="1" minW={0}>
                {item.connector_image_url && (
                  <Image
                    src={item.connector_image_url}
                    alt={item.connector_name || "Connector"}
                    boxSize="48px"
                    objectFit="contain"
                  />
                )}
                
                <Box flex="1" minW={0}>
                  <Flex align="center" gap={3} mb={2} flexWrap="wrap">
                    <Heading size="md" fontWeight="600" color="gray.900">
                      {item.connector_name || "Unknown Connector"}
                    </Heading>
                    {item.status && (
                      <Badge
                        size="sm"
                        px={2}
                        py={1}
                        borderRadius="full"
                        fontWeight="600"
                        colorScheme={
                          item.status === "UPDATED"
                            ? "green"
                            : item.status === "UPDATING"
                              ? "blue"
                              : item.status === "LOGIN_ERROR" ||
                                  item.status === "OUTDATED"
                                ? "red"
                                : "gray"
                        }
                      >
                        {item.status === "UPDATED" ? "Atualizada" : item.status}
                      </Badge>
                    )}
                  </Flex>
                  
                  {item.last_updated_at && (
                    <Text fontSize="sm" color="gray.500">
                      Última atualização: {formatRelativeTime(item.last_updated_at)}
                    </Text>
                  )}
                </Box>
              </Flex>

              {/* Right side - Delete button */}
              <DeleteItemButton
                itemId={item.item_id}
                itemName={item.connector_name}
                onDeleteSuccess={handleDeleteSuccess}
                size="sm"
              />
            </Flex>
          </Card.Root>
        ))}
      </Stack>
      
      {pagination.totalPages > 1 && (
        <Flex justify="space-between" align="center" mt={6}>
          <Text fontSize="sm" color="gray.600">
            Page {pagination.page} of {pagination.totalPages}
          </Text>
          
          <Flex gap={2}>
            <Button
              size="sm"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
            >
              Previous
            </Button>
            
            {/* Page numbers */}
            <Flex gap={1}>
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((pageNum) => {
                // Show first, last, current, and pages around current
                const showPage = 
                  pageNum === 1 ||
                  pageNum === pagination.totalPages ||
                  Math.abs(pageNum - currentPage) <= 1;
                
                const showEllipsis = 
                  (pageNum === 2 && currentPage > 3) ||
                  (pageNum === pagination.totalPages - 1 && currentPage < pagination.totalPages - 2);

                if (!showPage && !showEllipsis) return null;
                
                if (showEllipsis) {
                  return (
                    <Text key={`ellipsis-${pageNum}`} px={2} fontSize="sm" color="gray.500">
                      ...
                    </Text>
                  );
                }
                
                return (
                  <Button
                    key={pageNum}
                    size="sm"
                    onClick={() => handlePageChange(pageNum)}
                    variant={currentPage === pageNum ? "solid" : "outline"}
                    colorScheme={currentPage === pageNum ? "blue" : "gray"}
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </Flex>
            
            <Button
              size="sm"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === pagination.totalPages}
              variant="outline"
            >
              Next
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
}