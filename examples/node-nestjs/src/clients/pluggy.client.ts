import { Injectable } from '@nestjs/common';
import { PluggyClient as PluggyClientSdk } from 'pluggy-sdk';

@Injectable()
export class PluggyClient {
  private pluggyClientSdk: PluggyClientSdk;

  constructor() {
    this.pluggyClientSdk = new PluggyClientSdk({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    });
  }

  instance() {
    return this.pluggyClientSdk;
  }
}
