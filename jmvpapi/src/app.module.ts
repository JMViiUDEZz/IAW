import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpAuthModule } from './modules/jmvp-auth/jmvp-auth.module';
import { JmvpIncidenciasModule } from './modules/jmvp-incidencias/jmvp-incidencias.module';
import { JmvpAparatosModule } from './modules/jmvp-aparatos/jmvp-aparatos.module';
import { JmvpSeedModule } from './modules/jmvp-seed/jmvp-seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true
    }),
    JmvpAuthModule,
    JmvpIncidenciasModule,
    JmvpAparatosModule,
    JmvpSeedModule
  ],
})
export class AppModule {}