import { NgModule } from '@angular/core';
import { GravatarPipe } from './gravatar/gravatar';
import { CurpPipe } from './curp/curp';
import { EmailPipe } from './email/email';
@NgModule({
	declarations: [GravatarPipe,
    CurpPipe,
    EmailPipe],
	imports: [],
	exports: [GravatarPipe,
    CurpPipe,
    EmailPipe]
})
export class PipesModule {}
