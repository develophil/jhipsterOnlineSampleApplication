import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterOnlineSampleApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterOnlineSampleApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterOnlineSampleApplicationHomeModule } from './home/home.module';
import { JhipsterOnlineSampleApplicationAdminModule } from './admin/admin.module';
import { JhipsterOnlineSampleApplicationAccountModule } from './account/account.module';
import { JhipsterOnlineSampleApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterOnlineSampleApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterOnlineSampleApplicationSharedModule,
        JhipsterOnlineSampleApplicationHomeModule,
        JhipsterOnlineSampleApplicationAdminModule,
        JhipsterOnlineSampleApplicationAccountModule,
        JhipsterOnlineSampleApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterOnlineSampleApplicationAppModule {}
