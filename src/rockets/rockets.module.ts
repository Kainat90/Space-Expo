import { Module } from "@nestjs/common";
import { RocketsController } from "src/rocket.controller";
import { RocketsServices } from "src/rockets.service";
import { PrismaService } from "src/prisma.service";
@Module({

    controllers: [RocketsController],
    providers: [RocketsServices, PrismaService],
})

export class RocketsModule{}