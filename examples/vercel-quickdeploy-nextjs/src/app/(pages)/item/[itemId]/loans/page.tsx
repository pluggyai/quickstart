'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

export default function ItemLoansPage() {
  const router = useRouter();
  const params = useParams();
  const itemId = params?.itemId as string;

  useEffect(() => {
    if (itemId) {
      router.replace(`/item/${itemId}`);
    }
  }, [itemId, router]);

  return null;
}
