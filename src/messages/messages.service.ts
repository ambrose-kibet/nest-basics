import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(private messagesRepo: MessagesRepository) {}
  async findAll() {
    return await this.messagesRepo.findAll();
  }
  async findOne(id: string) {
    return await this.messagesRepo.findOne(id);
  }
  async create(content: CreateMessageDto) {
    return await this.messagesRepo.createMessage(content);
  }
}
