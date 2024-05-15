import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { nanoid } from 'nanoid';
import { CreateLinkDto } from './create-links.dto';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  constructor(private readonly linksService: LinksService) {}
  @Get(':shortId')
  async findOne(@Param('shortId') shortId: string, @Res() res: Response) {
    const link = await this.linksService.findOne(shortId);

    res.redirect(link.url);
  }

  @Post()
  async create(@Body() createLinkDto: CreateLinkDto): Promise<string> {
    const { url } = createLinkDto;
    //criar o identificador
    const shortId = nanoid(8);
    //salvar a url e identificador no banco
    const newLink = await this.linksService.create({ url, shortId });
    //retornar a url curta
    const shortUrl = `https://link-curto.up.railway.app/links/${newLink.shortId}`;
    return shortUrl;
  }
}
