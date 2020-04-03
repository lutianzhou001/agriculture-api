import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { GetAllTradesDto } from './dto/getAllTrades.dto'

var getAllTradesDtoMock = new GetAllTradesDto();


@ApiBearerAuth()
@ApiTags('trades')
@Controller('trades')

export class TradesController{

  @Get('/getAllTrades')
  @ApiOperation({ summary: 'getAllTrades from a certain market/board'})
  async getAllTrades(@Body() board: string): Promise<GetAllTradesDto> {

    return getAllTradesDtoMock;

  }
}
