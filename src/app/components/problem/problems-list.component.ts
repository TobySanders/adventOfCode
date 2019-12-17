import { Component, OnInit } from '@angular/core';
import { ProblemWrapper } from '../../services/problem-provider/problemwrapper.interface';
import { ProblemProviderService } from '../../services/problem-provider/problem-provider.service';
import { ProblemResolverFactoryService } from '../../services/problem-resolver/problemResolverFactory.service';
import { IProblemResolver } from '../../services/problem-resolver/problemResolver.service';

@Component({
    selector: 'problems-list',
    templateUrl: './problems-list.component.html',
})
export class ProblemsListComponent implements OnInit {
    problemWrappers : ProblemWrapper []

    constructor(private problemProvider : ProblemProviderService, private problemResolverFactory : ProblemResolverFactoryService) { }

    ngOnInit(): void { 
        this.problemWrappers = this.problemProvider.GetProblems();
        console.log(this.problemWrappers)
    }
    GetProblemResolver(id : number) : IProblemResolver{
        return this.problemResolverFactory.GetProblemResolver(id)
    }
}
