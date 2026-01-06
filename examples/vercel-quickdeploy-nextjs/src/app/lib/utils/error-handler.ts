import { NextRequest, NextResponse } from 'next/server';

type RouteHandler = (request: NextRequest) => Promise<NextResponse>;

export function withErrorHandling(handler: RouteHandler): RouteHandler {
  return async (request: NextRequest) => {
    try {
      return await handler(request);
    } catch (error: unknown) {
      const isError = error instanceof Error;
      const errorMessage = isError ? error.message : String(error);
      const errorStack = isError ? error.stack : undefined;
      const errorName = isError ? error.name : undefined;

      const httpError = error as { 
        response?: { 
          data?: unknown; 
          status?: number;
        };
      };
      
      console.error('Route handler error:', {
        url: request.url,
        method: request.method,
        message: errorMessage,
        stack: errorStack,
        name: errorName,
        response: httpError.response?.data,
        status: httpError.response?.status,
      });

      return NextResponse.json(
        {
          success: false,
          error: errorMessage || 'Internal server error',
          details: httpError.response?.data || errorMessage,
        },
        { status: httpError.response?.status || 500 }
      );
    }
  };
}