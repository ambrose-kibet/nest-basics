import { Injectable, NotFoundException } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import { CreateMessageDto } from './dtos/create-message.dto';

@Injectable()
export class MessagesRepository {
  async findAll() {
    const content = await readFile('messages.json', 'utf8');
    const messages = await JSON.parse(content);
    return messages;
  }
  async findOne(id: string) {
    const content = await readFile('messages.json', 'utf-8');
    const messages = await JSON.parse(content);
    const singleMessage = messages[id];
    if (!singleMessage) {
      throw new NotFoundException(`No messge with id ${id} exist`);
    }
    return singleMessage;
  }
  async createMessage(content: CreateMessageDto) {
    const id = Math.floor(Math.random() * 999).toString();
    const contents = await readFile('messages.json', 'utf-8');
    const messages = await JSON.parse(contents);

    const message = {
      content: content.content,
      id,
    };
    messages[id] = message;
    await writeFile('messages.json', JSON.stringify(messages), 'utf-8');
    return message;
  }
}
