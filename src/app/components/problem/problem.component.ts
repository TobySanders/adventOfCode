import { Component, Input } from '@angular/core';
import { IProblemResolver } from '../../services/problem-resolver/problemResolver.service';
import { Problem } from '../../services/problem-provider/problem.interface';


@Component({
    selector: 'problem',
    templateUrl: './problem.component.html',
    styles: [`
        .button { 
            background : url(../assets/images/icons8-expand-arrow-50.png);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 25px;
            width: 25px;
            border: none; 
        }
        .button-up { transform : rotate(-180deg); }
        .button-down { transform : rotate(0deg); }
    `]
})

export class ProblemComponent {
    @Input() problem:Problem
    @Input() problemResolver : IProblemResolver
    @Input() index: number

    isCollapsed: any = true;

    onSubmitClicked(input : any){
        console.log(`Resolving problem ${this.problem.Question} for input ${input}`)
        if(this.index === 0)
            var result = this.problemResolver.ResolveProblem(input);
        else
            var result = this.problemResolver.ResolveAdvancedProblem(input);
        console.log(`result is ${result}`)
        this.problem.Result = result;
    }

    onCollapseClicked(){
        this.isCollapsed = !this.isCollapsed
    }

    ngOnInit(): void {  
        console.log("Problem component init: " + this.problem.Question)
        console.log("index is "+ this.index)
    }
}
 