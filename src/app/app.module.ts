import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ProblemComponent } from "./components/problem/problem.component";
import { ProblemsListComponent } from "./components/problem/problems-list.component";

import { ProblemResolverFactoryService } from "./services/problem-resolver/problemResolverFactory.service";
import { Day1ResolverService } from "./services/problem-resolver/day1.resolver.service";
import { ProblemProviderService } from "./services/problem-provider/problem-provider.service";

@NgModule({
  declarations: [
    ProblemsListComponent,
    AppComponent,
    NavBarComponent,
    ProblemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    ProblemResolverFactoryService,
    Day1ResolverService,
    ProblemProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
