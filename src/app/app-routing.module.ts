import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './jetcuts/company/company.component';
import { HomepageComponent } from './jetcuts/homepage/homepage.component';
import { LoginPageComponent } from './jetcuts/login-page/login-page.component';
import { QuoteComponent } from './jetcuts/quote/quote.component';
import { ServicesComponent } from './jetcuts/services/services.component';

// import { KpsReadUserGuardService } from './core/auth-guard/kps-read-user-guard.service';
// import { ErrorComponent } from './shell/error/error.component';
// import { HomeComponent } from './shell/home/home.component';
// import { ProxyComponent } from './shell/proxy/proxy.component';

const routes: Routes = [
  //   { path: '', component: HomeComponent, canActivate: [KpsReadUserGuardService] },
  //   { path: 'error', component: ErrorComponent, canActivate: [KpsReadUserGuardService] },
  { path: 'quote', component: QuoteComponent },
  { path: '', component: HomepageComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'login', component: LoginPageComponent }
  //   { path: 'home', component: HomepageComponent },
  //   { path: 'home', component: HomepageComponent },
  //   { path: '', component: HomepageComponent }
  //   { path: 'home', loadChildren: '../app/jetcuts/homepage/homepage.component.ts' },
  //   { path: 'kcp', loadChildren: './kcp/kcp.module#KcpModule' },
  //   { path: 'kap', loadChildren: './kap/kap.module#KapModule' },
  //   { path: 'klp', loadChildren: './klp/klp.module#KlpModule' },
  //   { path: 'krp', loadChildren: './krp/krp.module#KrpModule' },
  //   {
  //     path: 'kps',
  //     loadChildren: './kps-system/kps-system.module#KpsSystemModule'
  //   }
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [{ path: 'kp2', loadChildren: './kp2/kp2.module#Kp2Module' }]
  //   },
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [{ path: 'kap', loadChildren: './kap/kap.module#KapModule' }]
  //   },
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [{ path: 'kcp', loadChildren: './kcp/kcp.module#KcpModule' }]
  //   },
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [{ path: 'klp', loadChildren: './klp/klp.module#KlpModule' }]
  //   },
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [{ path: 'krp', loadChildren: './krp/krp.module#KrpModule' }]
  //   },
  //   {
  //     path: 'modal',
  //     component: ProxyComponent,
  //     outlet: 'modal',
  //     children: [
  //       {
  //         path: 'kps',
  //         loadChildren: './kps-system/kps-system.module#KpsSystemModule'
  //       }
  //     ]
  //   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
