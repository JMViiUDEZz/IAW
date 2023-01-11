import { PartialType } from '@nestjs/mapped-types';
import { CreateJmvpAparatoDto } from './create-jmvp-aparato.dto';

export class UpdateJmvpAparatoDto extends PartialType(CreateJmvpAparatoDto) {}
