import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { User } from './classes/user.class'
import { Result } from './classes/result.class'
import { IsExistedDto } from './dto/isExisted.dto'
import { SendVerificationCodeDto } from './dto/sendVerificationCode.dto'
import { SignupDto } from './dto/signup.dto'
import { ForgetPasswordDto } from './dto/forgetPassword.dto'
import { BindTOTPDto } from './dto/bindTOTP.dto'
import { BindMailDto } from './dto/bindMail.dto'
import { BindPhoneDto } from './dto/bindPhone.dto'
import { LoginDto } from './dto/login.dto'
import { ResetPasswordDto } from './dto/resetPassword.dto'
import { VerifyDto } from './dto/verify.dto'
import { CloseAuthDto } from './dto/closeAuth.dto'
import { OpenAuthDto } from './dto/openAuth.dto'
import { ChangePasswordDto } from './dto/changePassword.dto'
import { SendCAPTCHA } from './dto/sendCAPTCHA.dto'
var resultMock = new Result();

@ApiBearerAuth()
@ApiTags('users')
@Controller('users')

export class UsersController {

  @Post('/isExisted')
  @ApiOperation({ summary: 'check if the user is available' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async isExisted(@Body() IsExistedDto: IsExistedDto): Promise<Result> {

    return resultMock;

  }

  @Post('/sendVerificationCode')
  @ApiOperation({ summary: 'sendVerificationCode' })
  async sendVerificationCode(@Body() sendVerificationCodeDto: SendVerificationCodeDto): Promise<Result> {

    return resultMock;

  }

  @Post('/signup')
  @ApiOperation({ summary: 'signup' })
  async signup(@Body() signupDto: SignupDto): Promise<Result> {

    return resultMock;

  }

  @Post('/login')
  @ApiOperation({ summary: 'login' })
  async login(@Body() loginDto: LoginDto): Promise<Result> {

    return resultMock;

  }

  @Post('/verify')
  @ApiOperation({ summary: 'verify the verificationCode' })
  async verify(@Body() verify: VerifyDto): Promise<Result> {

    return resultMock;
  }

  @Post('/forgetPassword')
  @ApiOperation({ summary: 'forgetPassword' })
  async forgetPassword(@Body() forgetPassword: ForgetPasswordDto): Promise<Result> {

    return resultMock;

  }

  @Post('/resetPassword')
  @ApiOperation({ summary: 'resetPassword' })
  async resetPassword(@Body() resetPassword: ResetPasswordDto): Promise<Result> {

    return resultMock;

  }

  @Post('/bindTOTP')
  @ApiOperation({ summary: 'bindTOTP' })
  async bindTOTP(@Body() bindTOTP: BindTOTPDto): Promise<Result> {

    return resultMock;
  }


  @Post('/bindMail')
  @ApiOperation({ summary: 'bindMail' })
  async bindMail(@Body() bindMail: BindMailDto): Promise<Result> {

    return resultMock;

  }

  @Post('/bindPhone')
  @ApiOperation({ summary: 'bindPhone' })
  async bindPhone(@Body() bindPhone: BindPhoneDto): Promise<Result> {

    return resultMock;

  }


  @Post('/closeAuth')
  @ApiOperation({ summary: 'closeAuth' })
  async closeAuth(@Body() closeAuth: CloseAuthDto): Promise<Result> {

    return resultMock;

  }

  @Post('/openAuth')
  @ApiOperation({ summary: 'openAuth' })
  async openAuth(@Body() openAuth: OpenAuthDto): Promise<Result> {

    return resultMock;

  }
  @Post('/changePassword')
  @ApiOperation({ summary: 'changePassword' })
  async changePassword(@Body() changePassword: ChangePasswordDto): Promise<Result> {

    return resultMock;

  }

  @Post('/sendCAPTCHA')
  @ApiOperation({summary: 'sendCAPTCHA'})
  async sendCAPTCHA(@Body() SendCAPTCHA:SendCAPTCHA):Promise<Result> {

    return resultMock;
    
  }
}

