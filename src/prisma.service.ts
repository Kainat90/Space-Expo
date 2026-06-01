import 'dotenv/config'
import { Injectable } from '@nestjs/common'
import { PrismaClient } from '@prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'
@Injectable()
export class PrismaService extends PrismaClient {
    constructor( ) {
        const adapter = new PrismaMariaDb({ 
              host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'root',
            database: 'spaceexpo' 
        })
        super({ adapter })
    }
}