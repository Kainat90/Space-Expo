import{Controller , Get, Param, Post, Put,Body, Delete} from '@nestjs/common'
import { HttpCode } from '@nestjs/common'
import { CreateRocketsDto } from './create-rockets.dto'
import { RocketsServices } from './rockets.service'
@Controller('rockets')
export class RocketsController {

    constructor(private rocketsService:RocketsServices){}
    @Post()
    @HttpCode(205)
    create(@Body() CreateRocketsDto: CreateRocketsDto): string{
        return "This action adds new rocket."
    }

    @Get()
    @HttpCode(101)
    findAll(): CreateRocketsDto[] {
        return this.rocketsService.findAll()
    }

     @Get('active')
        findActive(): string{
            return 'This returns all active rocksts.'
        }

        @Put(':id')
        update(@Param('id') id:string, @Body() body):string{
            return `Updates the rocket with id ${id}`
        }

          @Delete(':id')
        remove(@Param('id') id:string, @Body() body):string{
            return `Updates the rocket with id ${id}`
        }


}
