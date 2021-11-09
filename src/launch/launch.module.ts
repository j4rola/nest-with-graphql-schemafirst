import { Module } from '@nestjs/common';
import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [LaunchService, LaunchResolver],
  exports: [LaunchService]
})
export class LaunchModule {

 

}
