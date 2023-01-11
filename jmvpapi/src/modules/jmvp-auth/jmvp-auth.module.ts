import { Module } from '@nestjs/common';
import { JmvpAuthService } from './jmvp-auth.service';
import { JmvpAuthController } from './jmvp-auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JmvpUser } from './entities/jmvp-user.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';


@Module({
  controllers: [JmvpAuthController],
  providers: [JmvpAuthService, JwtStrategy],
  imports: [ 
    ConfigModule,
    TypeOrmModule.forFeature( [ JmvpUser ]),
    PassportModule.register({ defaultStrategy: 'jwt'}),
    JwtModule.registerAsync({
      imports: [ ConfigModule ],
      inject: [ ConfigService ],
      useFactory: ( configService: ConfigService ) => {
        console.log ('JWT Secret --> ', configService.get('JWT_SECRET'));
        return {
          secret: configService.get('JWT_SECRET'),
          signOptions: {
              expiresIn: '2h'
          }
        }
      }
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '2h'
      }
    })
  ],
  exports: [ TypeOrmModule, JmvpAuthService, JwtStrategy, PassportModule, JwtModule ]
})
export class JmvpAuthModule {}