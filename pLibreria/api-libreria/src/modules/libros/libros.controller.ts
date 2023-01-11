import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LibrosService } from './libros.service';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';

@Controller('libros')
export class LibrosController {
  constructor(private readonly librosService: LibrosService) {}

  @Post()
  create(@Body() createLibroDto: CreateLibroDto) {
    return this.librosService.create(createLibroDto);
  }

  @Get()
  findAll() {
    return this.librosService.findAll();
  }

  @Get(':idL')
  findOne(@Param('idL') idL: string) {
    return this.librosService.findOne(idL);
  }

  @Patch(':idL')
  update(@Param('idL') idL: string, @Body() updateLibroDto: UpdateLibroDto) {
    return this.librosService.update(idL, updateLibroDto);
  }

  @Delete(':idL')
  remove(@Param('idL') idL: string) {
    return this.librosService.remove(idL);
  }
}
