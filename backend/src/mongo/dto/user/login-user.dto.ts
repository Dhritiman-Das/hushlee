import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    @IsEmail()
    userName: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}