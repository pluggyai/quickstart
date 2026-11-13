import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { hasValidIds, WebhookPayload } from '../types/webhook.body';

@Controller('webhooks')
export class WebhookController {
  constructor(
    private eventEmitter: EventEmitter2,
    @InjectPinoLogger(WebhookController.name)
    private readonly logger: PinoLogger,
  ) {}

  @Post()
  onWebhookReceived(@Body() payload: WebhookPayload) {
    if (!payload?.event || !hasValidIds(payload)) {
      throw new BadRequestException('Invalid webhook payload');
    }

    this.logger.info({ payload }, `Webhook received`);

    this.eventEmitter.emit(payload.event, payload);
  }
}
