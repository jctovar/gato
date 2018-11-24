import { NgModule } from '@angular/core';
import { GravatarPipe } from './gravatar/gravatar';
import { CurpPipe } from './curp/curp';
@NgModule({
	declarations: [GravatarPipe,
    CurpPipe],
	imports: [],
	exports: [GravatarPipe,
    CurpPipe]
})
export class PipesModule {}
