import { Injectable } from "@nestjs/common";
import { CreateRocketsDto } from "./create-rockets.dto";
import { PrismaService } from "./prisma.service";
@Injectable()

export class RocketsServices{
    constructor(private prisma:PrismaService){}

    async findAll(){
        return this.prisma.rocket.findMany()
    }
    private readonly rockets: CreateRocketsDto[]=[];

    async create (createRocketDto: CreateRocketsDto){
        return this.prisma.rocket.create({data:createRocketDto})
    }

    async findOne(id:number){
        return this.prisma.rocket.findUnique
        where:{id}
    }
     async update(id: number, updateRocketDto: CreateRocketsDto) {
        return this.prisma.rocket.update({
            where: { id },
            data: updateRocketDto
        })
    }

     async remove(id: number) {
        return this.prisma.rocket.delete({
            where: { id }
        })
    }
}