import { Body, Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { WebhookPayload } from '../types/webhook.body';

@Controller('webhooks')
export class WebhookController {
  constructor(
    private eventEmitter: EventEmitter2,
    @InjectPinoLogger(WebhookController.name)
    private readonly logger: PinoLogger,
  ) {}

  @Post()
  onWebhookReceived(@Body() payload: WebhookPayload) {
    this.logger.info({ payload }, `Webhook received`);

    this.eventEmitter.emit(payload.event, payload);
  }
}
