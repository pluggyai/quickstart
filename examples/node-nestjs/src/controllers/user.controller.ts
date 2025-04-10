import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { TokenService } from '../services/token.service';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly tokenService: TokenService,
  ) {}

  @Post()
  async create(@Body() dto: { name: string }) {
    return this.userService.create(dto);
  }

  @Post('/:id/token')
  async createToken(@Param('id') id: string, @Query('itemId') itemId?: string) {
    return this.tokenService.getTokenWithSdk(id, itemId);
  }

  @Get('/:id/connections')
  async getConnections(@Param('id') id: string) {
    return this.userService.getConnections(id);
  }

  @Get('/:id/transactions')
  async getTransactions(@Param('id') id: string) {
    return this.userService.getTransactions(id);
  }

  @Get('/:id/accounts')
  async getAccounts(@Param('id') id: string) {
    return this.userService.getAccounts(id);
  }
}
