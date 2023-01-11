import { IsIn, IsString } from "class-validator";

export class CreateJmvpIncidenciaDto {
    // @IsString()
    // jmvpcodigo: string;
  
    @IsString()
    jmvpdescripcion: string;
  
    @IsString()
    jmvpfecha: string;
      
    @IsString()
    @IsIn(['pendiente','finalizada','en proceso'])
    jmvpstatus: string;

    @IsString()
    jmvpcodAp: string;

    @IsString()
    jmvpideaUs: string;
}
