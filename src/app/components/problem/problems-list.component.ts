import { Component, OnInit } from '@angular/core';
import { ProblemProviderService } from 'src/app/services/problem-provider/problem-provider.service';
import { Problem } from 'src/app/services/problem-provider/problem.interface';
import { IProblemResolver } from 'src/app/services/problem-resolver/problemResolver.service';
import { ProblemResolverFactoryService } from 'src/app/services/problem-resolver/problemResolverFactory.service';

@Component({
    selector: 'problems-list',
    templateUrl: './problems-list.component.html',
})
export class ProblemsListComponent implements OnInit {
    Problems : Problem []

    constructor(private problemProvider : ProblemProviderService, private problemResolverFactory : ProblemResolverFactoryService) { }

    ngOnInit(): void { 
        this.Problems = this.problemProvider.GetProblems();
    }
    GetProblemResolver(id : number) : IProblemResolver{
        return this.problemResolverFactory.GetProblemResolver(id)
    }
}
