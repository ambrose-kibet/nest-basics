import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}
  @Get()
  async getAllMessages() {
    return await this.messagesService.findAll();
  }

  @Get('/:id')
  async getSingleMessage(@Param('id') id: string) {
    return await this.messagesService.findOne(id);
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    return await this.messagesService.create(body);
  }
}
