import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ProblemWrapper } from 'src/app/services/problem-provider/problemwrapper.interface';

@Component({
    selector: 'side-bar',
    templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {

    @Input() problemsRef : ProblemWrapper;
    constructor() { }

    DoWork(){
        
    }
    ngOnInit(): void { 
        console.log(this.problemsRef)
    }
}
