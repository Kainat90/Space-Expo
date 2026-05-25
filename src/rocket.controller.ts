import{Controller , Get, Param, Post, Put,Body, Delete} from '@nestjs/common'
import { HttpCode } from '@nestjs/common'
@Controller('rockets')
export class RocketsController {

    @Post()
    @HttpCode(205)
    create(): string{
        return "This action adds new rocket."
    }

    @Get()
    @HttpCode(101)
    findAll(): string{
       
        return 'This returns all existing rockets'
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
