import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { nanoid } from 'nanoid';
import { Repository } from 'typeorm';
import { CreateLinkDto } from './create-links.dto';
import { Link } from './link.entity';

@Injectable()
export class LinksService {
  constructor(
    @InjectRepository(Link)
    private readonly linksRepository: Repository<Link>,
  ) {}

  create(createLinkDto: CreateLinkDto): Promise<Link> {
    const link = new Link();
    link.url = createLinkDto.url;
    link.shortId = nanoid(8);
    return this.linksRepository.save(link);
  }

  async findOne(shortId: string): Promise<Link | null> {
    const link = await this.linksRepository.findOneBy({ shortId });
    return link;
  }
}
