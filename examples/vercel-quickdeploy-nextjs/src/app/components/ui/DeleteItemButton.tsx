'use client';

import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { api } from '@/app/lib/utils/api';

interface DeleteItemButtonProps {
  itemId: string;
  itemName?: string;
  onDeleteSuccess?: () => void;
  size?: 'sm' | 'md' | 'lg';
}

export function DeleteItemButton({
  itemId,
  itemName,
  onDeleteSuccess,
  size = 'sm',
}: DeleteItemButtonProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const confirmed = window.confirm(
      `Tem certeza que deseja excluir ${itemName || 'esta conta'}? Esta ação não pode ser desfeita.`
    );

    if (!confirmed) return;

    setIsDeleting(true);

    try {
      await api.delete('/api/items', {
        params: { itemId },
      });

      onDeleteSuccess?.();
    } catch (error) {
      console.error('Error deleting item:', error);
      alert('Falha ao excluir conta. Por favor, tente novamente.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <Button
      size={size}
      colorScheme="red"
      variant="ghost"
      onClick={handleDelete}
      loading={isDeleting}
      loadingText="Excluindo..."
      borderRadius="lg"
      fontWeight="600"
      _hover={{
        bg: "red.50",
        color: "red.600",
      }}
    >
      Excluir
    </Button>
  );
}