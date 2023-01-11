import { Controller, Get } from '@nestjs/common';
import { JmvpSeedService } from './jmvp-seed.service';


@Controller('seed')
export class JmvpSeedController {
  constructor(private readonly seedService: JmvpSeedService) {}

  @Get()
  excuteSeed() {
    return this.seedService.runData();
  }
}