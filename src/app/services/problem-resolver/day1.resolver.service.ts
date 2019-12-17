import { Injectable } from '@angular/core';
import { IProblemResolver } from './problemResolver.service';

@Injectable()
export class Day1ResolverService implements IProblemResolver {
    ngOnInit(): void {
        console.log("Day 1 problem Resolver Created")
    }

    ResolveProblem(input: string): string {
        console.log(`Resolving problem for input: ${input}`)
        var splitInput = (input +'').split(" ");
        console.log(`splintInput: ${splitInput}`)
        var total : number = 0;
        
        for (let index = 0; index < splitInput.length; index++) {
            var element = splitInput[index];
            console.log(`calculating fuel for element: ${element}`)
            var result = this.CalculateFuel(+element)
            console.log(`result is : ${result}`)
            total += result;
        }

        console.log(`total fuel needed is: ${total}`)
        return total.toString()
    }
m
    ResolveAdvancedProblem(input: string): string {
        console.log("Solving advanced fuel calculation")
        var splitInput = (input +'').split(" ");
        var total : number = 0; 

        splitInput.forEach(element => {
            total += this.CalculateAdditionalFuel(+element);
        });

        return total.toString();
    }

    CalculateAdditionalFuel(input: number){
        var additionalFuel = this.CalculateFuel(input);
        console.log(`additional fuel: ${additionalFuel}`)
        if(additionalFuel > 0){
            console.log('fuel too heavy recursing');
            additionalFuel += this.CalculateAdditionalFuel(additionalFuel);
            console.log(`Added ${additionalFuel} to fuel total`)
        }
        else{
            console.log('All Fuel weights calculated, returning')
            additionalFuel = 0;
        }
        return additionalFuel

    }
    CalculateFuel(input : number) : number {
        var result = Math.floor(input / 3);
        return result -= 2;
    }
}