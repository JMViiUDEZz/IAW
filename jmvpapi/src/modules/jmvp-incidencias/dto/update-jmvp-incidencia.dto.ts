import { PartialType } from '@nestjs/mapped-types';
import { CreateJmvpIncidenciaDto } from './create-jmvp-incidencia.dto';

export class UpdateJmvpIncidenciaDto extends PartialType(CreateJmvpIncidenciaDto) {}
