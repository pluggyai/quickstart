import { PluggyClient } from 'pluggy-sdk';

let pluggyClientInstance: PluggyClient | null = null;

export const getPluggyClient = (): PluggyClient => {
  const clientId = process.env.PLUGGY_CLIENT_ID;
  const clientSecret = process.env.PLUGGY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Missing Pluggy credentials: PLUGGY_CLIENT_ID and PLUGGY_CLIENT_SECRET are required');
  }

  if (!pluggyClientInstance) {
    pluggyClientInstance = new PluggyClient({
      clientId,
      clientSecret,
    });
  }
  return pluggyClientInstance;
};