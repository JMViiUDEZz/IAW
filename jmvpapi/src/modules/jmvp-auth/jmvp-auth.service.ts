import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateJmvpUserDto } from './dto/create-jmvp-user.dto';
import { UpdateJmvpUserDto } from './dto/update-jmvp-user.dto';

// import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JmvpUser } from './entities/jmvp-user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JmvpAuthService {

  constructor(
    @InjectRepository(JmvpUser)
    private readonly jmvpUserRepository: Repository<JmvpUser>,
    private readonly jwtService: JwtService
  ){}

  async jmvpregister(createJmvpUserDto: CreateJmvpUserDto) {
    // return 'This action adds a new jmvpAuth';
    try {
      const { jmvppassword, ...userData } = createJmvpUserDto;
      const user = this.jmvpUserRepository.create({
        ...userData,
        jmvppassword: bcrypt.hashSync( jmvppassword, 10 )
      });
      await this.jmvpUserRepository.save(user);
      delete user.jmvppassword;

      return {
        ...user, 
        token: this.getJwtToken({ jmvpidea: user.jmvpidea })
      }
      
    } catch (error) {
      this.handleDBErrors(error)
    }
  }

  private handleDBErrors (error: any): never{
    if (error.code === '23505')
      throw new BadRequestException(error.detail)
    
    throw new InternalServerErrorException('Please Check Server Error ...')
  }

  private getJwtToken( payload: JwtPayload){
    const token = this.jwtService.sign(payload);
    return token;
  }

  // findAll() {
  //   return `This action returns all jmvpAuth`;
  // }

  jmvpgetId(jmvpidea: string) {
    // return `This action returns a #${id} jmvpAuth`;
    return this.jmvpUserRepository.findOne({
      where: { 
        jmvpidea
      },
      relations: { 
        jmvpcodigoIn: true
      }
    });
  }

  async jmvpdeleteAllUsers() {
    const query = this.jmvpUserRepository.createQueryBuilder('user');

    try {
      return await query
        .delete()
        .where({})
        .execute();

    } catch (error) {
      this.handleDBErrors(error);
    }

  }

  // update(id: number, updateJmvpAuthDto: UpdateJmvpAuthDto) {
  //   return `This action updates a #${id} jmvpAuth`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} jmvpAuth`;
  // }
}
