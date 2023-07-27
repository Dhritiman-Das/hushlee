import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SignupUserDto {
    @IsNotEmpty()
    @IsEmail()
    userName: string;
    @IsNotEmpty()
    @IsString()
    password: string;
}