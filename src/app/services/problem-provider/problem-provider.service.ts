import { Injectable } from '@angular/core';
import { Problem } from './problem.interface';

@Injectable()
export class ProblemProviderService {

    PROBLEMS : Problem[] = [
        { 
            Title : "Day 1: The Tyranny of the Rocket Equation",
            Description : `Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.`,
            Question: 'What is the sum of the fuel requirements for all of the modules on your spacecraft?',
            Id : 0
        },{
            Title: "Day 2: 1202 Program Alarm",
            Description: `On the way to your gravity assist around the Moon, your ship computer beeps angrily about a "1202 program alarm". On the radio, an Elf is already explaining how to handle the situation: "Don't worry, that's perfectly norma--" The ship computer bursts into flames.
            \r\nYou notify the Elves that the computer's magic smoke seems to have escaped. "That computer ran Intcode programs like the gravity assist program it was working on; surely there are enough spare parts up there to build a new Intcode computer!"`,
            Question : 'What value is left at position 0 after the program halts?',
            Id: 1
        }
    ];
    GetProblems() : Problem[] {
        return this.PROBLEMS
    }
}