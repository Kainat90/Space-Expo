import { Module } from "@nestjs/common";
import { RocketsModule } from "./rockets.module";

@Module({

    imports: [RocketsModule],
})

export class AppModule{}