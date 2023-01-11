import { IsIn, IsNumber, IsString } from "class-validator";

export class CreateJmvpAparatoDto {
    @IsString()
    jmvpcod: string;
  
    @IsString()
    jmvpnombre: string;
  
    @IsString()
    @IsIn(['Proyector','Ordenador','Pizarra Digital','Auriculares','Altavoces'])
    jmvptipo: string;
      
    @IsString()
    @IsIn(['B1','B2','B3','C1','C2','C3','C4','A2','A2'])
    jmvpaula: string;
      
    @IsNumber()
    jmvpaño: number;
 }
