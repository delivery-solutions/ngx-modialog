import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ModalModule } from '@deliverysolutions/ngx-modialog';
import { BootstrapModalModule } from '@deliverysolutions/ngx-modialog/plugins/bootstrap';

import { RuntimeCompiledComponent }   from './runtime-compiled.component';

@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        BootstrapModalModule
    ],
    declarations: [
        RuntimeCompiledComponent
    ]
})
export class RuntimeCompiledModule {

}
