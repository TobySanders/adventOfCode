import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProblemsListComponent } from './components/problem/problems-list.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProblemComponent } from './components/problem/problem.component';
import { ProblemResolverFactoryService } from './services/problem-resolver/problemResolverFactory.service';
import { Day1ResolverService } from './services/problem-resolver/day1.resolver.service';
import { ProblemProviderService } from './services/problem-provider/problem-provider.service';
import { ProblemWrapperComponent } from './components/problem/problem-wrapper.component';
import { SideBarComponent } from "./components/nav-bar/side-bar.component";

@NgModule({
  declarations: [
    ProblemsListComponent,
    AppComponent,
    NavBarComponent,
    ProblemComponent,
    ProblemWrapperComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [
    ProblemResolverFactoryService,
    Day1ResolverService,
    ProblemProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
