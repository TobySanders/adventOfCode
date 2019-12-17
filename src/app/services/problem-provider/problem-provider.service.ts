import { Injectable } from '@angular/core';
import { ProblemWrapper } from './problemwrapper.interface';

@Injectable()
export class ProblemProviderService {

    PROBLEMS : ProblemWrapper[] = [
        { 
            Title : "Day 1: The Tyranny of the Rocket Equation",
            Id : 0,
            Problems: [{
                Description : `Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.`,
                Question: 'What is the sum of the fuel requirements for all of the modules on your spacecraft?',
            },
            {
                Description: `Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.\r\n\r\n
                                So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative`,
                Question: 'What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)'
            }]

        },{
            Title: "Day 2: 1202 Program Alarm",
            Id: 1,
            Problems: [{
                Description : `Once you have a working computer, the first step is to restore the gravity assist program (your puzzle input) to the "1202 program alarm" state it had just before the last computer caught fire. To do this, before running the program, replace position 1 with the value 12 and replace position 2 with the value 2. `,
                Question : 'What value is left at position 0 after the program halts?'
            }]
        }
    ];
    GetProblems() : ProblemWrapper[] {
        return this.PROBLEMS
    }
}