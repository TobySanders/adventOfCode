import { Injectable } from '@angular/core';
import { IProblemResolver } from './problemResolver.service';
import { Day1ResolverService } from './day1.resolver.service';
import { Day2ResolverService } from './day2.resolver.service';

@Injectable()
export class ProblemResolverFactoryService {
    GetProblemResolver(problemId: number): IProblemResolver{
        switch(problemId){
            case 0: 
                return new Day1ResolverService;
            case 1:
                return new Day2ResolverService;
        }
    }
}