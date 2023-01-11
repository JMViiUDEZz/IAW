import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { JmvpAuthService } from './jmvp-auth.service';
import { CreateJmvpUserDto } from './dto/create-jmvp-user.dto';
import { UpdateJmvpUserDto } from './dto/update-jmvp-user.dto';

@Controller('jmvp-auth')
export class JmvpAuthController {
  constructor(private readonly jmvpAuthService: JmvpAuthService) {}

  @Post()
  create(@Body() createJmvpUserDto: CreateJmvpUserDto) {
    return this.jmvpAuthService.jmvpregister(createJmvpUserDto);
  }

  // @Get()
  // findAll() {
  //   return this.jmvpAuthService.findAll();
  // }

  @Get(':jmvpidea')
  findOne(@Param('jmvpidea') jmvpidea: string) {
    return this.jmvpAuthService.jmvpgetId(jmvpidea);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateJmvpAuthDto: UpdateJmvpAuthDto) {
  //   return this.jmvpAuthService.update(+id, updateJmvpAuthDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.jmvpAuthService.remove(+id);
  // }
}
