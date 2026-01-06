export interface PaginatedResponse<T> {
  success: boolean;
  data: {
    results: T[];
    page: number;
    pageSize: number;
    totalPages: number;
    totalRecords: number;
  };
}

export interface PaginationOptions {
  page?: number;
  pageSize?: number;
  defaultPageSize?: number;
}

/**
 * Converts an array to a paginated response
 * 
 * @param items - Array of items to paginate
 * @param options - Pagination options (page, pageSize, defaultPageSize)
 * @returns Paginated response object
 * 
 * @example
 * const loans = await getLoans();
 * return NextResponse.json(toPaginatedResponse(loans, { page: 1, pageSize: 10 }));
 */
export function toPaginatedResponse<T>(
  items: T[],
  options: PaginationOptions = {}
): PaginatedResponse<T> {
  const {
    page = 1,
    pageSize = options.defaultPageSize || 50,
  } = options;

  const totalRecords = items.length;
  const totalPages = Math.ceil(totalRecords / pageSize);
  const currentPage = Math.max(1, Math.min(page, totalPages || 1));
  
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const results = items.slice(startIndex, endIndex);

  return {
    success: true,
    data: {
      results,
      page: currentPage,
      pageSize,
      totalPages: totalPages || 1,
      totalRecords,
    },
  };
}

/**
 * Extracts pagination parameters from URL search params
 * 
 * @param searchParams - URLSearchParams object from Next.js request
 * @returns Pagination options object
 * 
 * @example
 * const { searchParams } = request.nextUrl;
 * const paginationOptions = getPaginationParams(searchParams);
 */
export function getPaginationParams(searchParams: URLSearchParams): PaginationOptions {
  const page = searchParams.get('page');
  const pageSize = searchParams.get('pageSize');

  return {
    page: page ? parseInt(page, 10) : 1,
    pageSize: pageSize ? parseInt(pageSize, 10) : 50,
  };
}