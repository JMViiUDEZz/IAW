import { IsIn, IsOptional, IsString, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MinLength(1)
    name: string;
  
    @IsString()
    @MinLength(1)
    email: string;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    website?: string;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    github?: string;
  
    @IsString()
    @MinLength(1)
    @IsOptional()
    twitter?: string;

    @IsString()
    @MinLength(1)
    @IsOptional()
    @IsIn(['anaya', 'marcombo'])
    editorial?: string;
 }
 