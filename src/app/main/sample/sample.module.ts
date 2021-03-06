import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { SampleComponent } from './sample.component';
import { AuthenGuardService } from 'app/authentication/authen-guard.service';
import { UploadFileModule } from 'app/upload-file/upload-file.module';

const routes = [
    {
        path     : 'sample',
        component: SampleComponent,
        // canActivate: [AuthenGuardService]
    }
];

@NgModule({
    declarations: [
        SampleComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        UploadFileModule
    ],
    exports     : [
        SampleComponent
    ]
})

export class SampleModule
{
}
