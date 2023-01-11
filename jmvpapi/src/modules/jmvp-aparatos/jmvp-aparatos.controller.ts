import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JmvpAparatosService } from './jmvp-aparatos.service';
import { CreateJmvpAparatoDto } from './dto/create-jmvp-aparato.dto';
import { UpdateJmvpAparatoDto } from './dto/update-jmvp-aparato.dto';

@Controller('jmvp-aparatos')
export class JmvpAparatosController {
  constructor(private readonly jmvpAparatosService: JmvpAparatosService) {}

  @Post()
  create(@Body() createJmvpAparatoDto: CreateJmvpAparatoDto) {
    return this.jmvpAparatosService.jmvpcreate(createJmvpAparatoDto);
  }

  @Get()
  findAll() {
    return this.jmvpAparatosService.jmvpgetAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.jmvpAparatosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJmvpAparatoDto: UpdateJmvpAparatoDto) {
  //   return this.jmvpAparatosService.update(+id, updateJmvpAparatoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jmvpAparatosService.remove(+id);
  // }
}
