import { Component, Input } from '@angular/core';
import { IProblemResolver } from 'src/app/services/problem-resolver/problemResolver.service';
import { Problem } from 'src/app/services/problem-provider/problem.interface';

@Component({
    selector: 'problem',
    templateUrl: './problem.component.html',
})

export class ProblemComponent {
    @Input() problem:Problem
    @Input() problemResolver : IProblemResolver

    onSubmitClicked(input : any){
        console.log(`Resolving problem ${this.problem.Id} for input ${input}`)
        var result = this.problemResolver.ResolveProblem(input);
        console.log(`result is ${result}`)
        this.problem.Result = result;
    }

    ngOnInit(): void {  
        console.log("Problem component init: " + this.problem.Title)
    }
}
