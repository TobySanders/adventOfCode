import { Injectable } from '@angular/core';
import { IProblemResolver } from './problemResolver.service';

@Injectable()
export class Day2ResolverService implements IProblemResolver {

    ngOnInit(): void {
        console.log("Day 2 problem Resolver Created")
    }

    ResolveProblem(input: string): string {
        return "Not Yet Implemented"
    }

}