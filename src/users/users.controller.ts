import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { User } from './classes/user.class'
import { Result } from './classes/result.class'
import { SendVerificationCodeDto } from './dto/sendVerificationCode.dto'
import { SignupDto } from './dto/signup.dto'
import { ForgetPasswordDto } from './dto/forgetPassword.dto'
import { BindGoogleAuthDto } from './dto/bindGoogleAuth.dto'
import { BindMailorSmsDto } from './dto/bindMailorSms.dto'
import { LoginDto } from './dto/login.dto'
import { ResetPasswordDto } from './dto/resetPassword.dto'
import { VerifyDto } from './dto/verify.dto'
import { CloseAuthDto } from './dto/closeAuth.dto'
import { OpenAuthDto } from './dto/openAuth.dto'
import { ChangePasswordDto } from './dto/changePassword.dto'

var resultMock = new Result();


@ApiBearerAuth()
@ApiTags('users')
@Controller('users')

export class UsersController{

  @Post('/isAccountAvailable')
  @ApiOperation({ summary: 'check if the user is available'})
  @ApiResponse({status: 403, description:'Forbidden.'})
  async isAccountAvailable(@Body() account: string): Promise<Result> {

    return resultMock;

  }

  @Post('/sendVerificationCode')
  @ApiOperation({ summary: 'sendVerificationCode'})
  async sendVerificationCode(@Body() sendVerificationCodeDto: SendVerificationCodeDto): Promise<Result>{

    return resultMock;

  }

  @Post('/signup')
  @ApiOperation({ summary: 'signup'})
  async signup(@Body() signupDto: SignupDto): Promise<Result> {

    return resultMock;

  }

  @Post('/login')
  @ApiOperation({ summary: 'login'})
  async login(@Body() loginDto: LoginDto): Promise<Result> {

    return resultMock;

  }

  @Post('/verify')
  @ApiOperation({summary:'verify the verificationCode'})
  async verify(@Body() verify: VerifyDto): Promise<Result> {

    return resultMock;
  }

  @Post('/forgetPassword')
  @ApiOperation({summary:'forgetPassword'})
  async forgetPassword(@Body() forgetPassword:ForgetPasswordDto): Promise<Result> {

    return resultMock;

  }

  @Post('/resetPassword')
  @ApiOperation({summary: 'resetPassword'})
  async resetPassword(@Body() resetPassword:ResetPasswordDto): Promise<Result>{

    return resultMock;

  }

  @Post('/bindGoogleAuth')
  @ApiOperation({ summary : 'bindGoogleAuth'})
  async bindGoogleAuth(@Body() bindGoogleAuth:BindGoogleAuthDto): Promise<Result> {

    return resultMock;
  }


  @Post('/bindMailorSms')
  @ApiOperation({summary: 'bindMailorSms' })
  async bindMailorSms(@Body() bindMailorSms: BindMailorSmsDto):Promise<Result> {

    return resultMock;

  }

  @Post('/closeAuth')
  @ApiOperation({summary: 'closeAuth'})
  async closeAuth(@Body() closeAuth: CloseAuthDto):Promise<Result> {

    return resultMock;

  }

  @Post('/openAuth')
  @ApiOperation({summary: 'openAuth'})
  async openAuth(@Body() openAuth: OpenAuthDto):Promise<Result> {

    return resultMock;

  }
}
