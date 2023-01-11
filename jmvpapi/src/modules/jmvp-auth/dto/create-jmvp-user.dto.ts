import { IsString, IsBoolean } from "class-validator";

export class CreateJmvpUserDto {
    @IsString()
    jmvpidea: string;
  
    @IsString()
    jmvpemail: string;

    @IsString()
    jmvppassword: string;

    @IsBoolean()
    jmvpisActive: boolean;
  
    @IsString()
    jmvprol: string;

    @IsString()
    jmvpnombre: string;
}
