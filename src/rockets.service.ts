import { Injectable } from "@nestjs/common";
import { CreateRocketsDto } from "./create-rockets.dto";

@Injectable()

export class RocketsServices{
    
    private readonly rockets: CreateRocketsDto[]=[];

    create(rocket:CreateRocketsDto){
        this.rockets.push(rocket);
    }

    findAll(): CreateRocketsDto[]{
        return this.rockets;
    }
}