import { PartialType } from '@nestjs/mapped-types';
import { CreateJmvpUserDto } from './create-jmvp-user.dto';

export class UpdateJmvpUserDto extends PartialType(CreateJmvpUserDto) {}
