import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common'
import { CreateRocketsDto } from './create-rockets.dto'
import { RocketsServices } from './rockets.service'

@Controller('rockets')
export class RocketsController {

    constructor(private rocketsService: RocketsServices) {}

    @Post()
    async create(@Body() createRocketsDto: CreateRocketsDto) {
        return this.rocketsService.create(createRocketsDto)
    }

    @Get()
    async findAll() {
        return this.rocketsService.findAll()
    }

    @Get('active')
    async findActive() {
        return this.rocketsService.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.rocketsService.findOne(+id)
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() updateRocketsDto: CreateRocketsDto) {
        return this.rocketsService.update(+id, updateRocketsDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return this.rocketsService.remove(+id)
    }
}