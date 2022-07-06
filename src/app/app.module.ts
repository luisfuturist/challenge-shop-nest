import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from 'src/api/api.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        ApiModule,
    ],
})
export class AppModule {}
