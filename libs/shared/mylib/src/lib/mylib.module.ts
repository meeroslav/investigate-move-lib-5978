import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MysrvService } from './mysrv.service';

@NgModule({
  imports: [CommonModule],
  providers: [MysrvService],
})
export class MylibModule {}
