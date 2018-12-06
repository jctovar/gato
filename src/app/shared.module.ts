import { NgModule } from '@angular/core';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    
  ],
  imports: [
    PipesModule
  ],
  exports: [
    PipesModule
  ]
})
export class SharedModule {}