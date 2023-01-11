import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { JmvpUser } from '../entities/jmvp-user.entity';
import { JwtPayload } from '../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy( Strategy ) {

    constructor(
        @InjectRepository( JmvpUser )
        private readonly userRepository: Repository<JmvpUser>,

        configService: ConfigService
    ) {

        super({
            secretOrKey: configService.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }


    async validate( payload: JwtPayload ): Promise<JmvpUser> {
        
        const { jmvpidea } = payload;

        const user = await this.userRepository.findOneBy({ jmvpidea });

        if ( !user ) 
            throw new UnauthorizedException('Token not valid')
            
        if ( !user.jmvpisActive ) 
            throw new UnauthorizedException('User is inactive, talk with an admin');
        

        return user;
    }

}