import { Module } from "@nestjs/common";
import { RocketsController } from "src/rocket.controller";
import { RocketsServices } from "src/rockets.service";

@Module({

    controllers: [RocketsController],
    providers: [RocketsServices],
})

export class RocketsModule{}