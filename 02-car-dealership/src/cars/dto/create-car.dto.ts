import { IsString, MinLength } from "class-validator";

export class CreateCarDto {

    //id: number; //en realidad, lo coge de la interfaz

    @IsString({ message: `El campo brand debe de ser un string corto `})
    readonly brand: string;

    @IsString()
    @MinLength(3)
    readonly model: string;
}