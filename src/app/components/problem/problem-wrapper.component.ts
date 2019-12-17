import { Component, OnInit, Input } from '@angular/core';
import { ProblemWrapper } from '../../services/problem-provider/problemwrapper.interface';
import { IProblemResolver } from '../../services/problem-resolver/problemResolver.service';

@Component({
    selector: 'problem-wrapper',
    templateUrl: './problem-wrapper.component.html',
})
export class ProblemWrapperComponent implements OnInit {
    constructor() { }

    @Input() problemWrapper : ProblemWrapper
    @Input() problemResolver : IProblemResolver

    ngOnInit(): void { }
}
