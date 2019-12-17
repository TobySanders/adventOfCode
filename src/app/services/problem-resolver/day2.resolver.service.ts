import { Injectable } from '@angular/core';
import { IProblemResolver } from './problemResolver.service';

@Injectable()
export class Day2ResolverService implements IProblemResolver {

    private haltExecution: boolean = false;

    ResolveAdvancedProblem(input: string): string {
        throw new Error("Method not implemented.");
    }

    ngOnInit(): void {
        console.log("Day 2 problem Resolver Created")
    }

    ResolveProblem(input: string): string {
        var splitInput = input.split(',');

        for (let index = 0; index < splitInput.length; index++) {
            const element = splitInput[index];
            var operation = this.GetOpCodeOperation(+element);
            var opResult = operation.Invoke(+splitInput[+splitInput[index+1]],+splitInput[+splitInput[index + 2]]);
            if(this.haltExecution)
                return this.PrepareReturnValue(splitInput);
            var storageTarget = +splitInput[index+3];
            splitInput[storageTarget] = opResult.toString();
            index+=3;
        }
        return this.PrepareReturnValue(splitInput);
    }

    PrepareReturnValue(outputArray : string[]) : string{
        return `Value at Position 0: ${outputArray[0]}\r\n Full output: ${outputArray.toString()}`;
    }

    GetOpCodeOperation(opCode: number) : IOpCodeOperation{
        switch(opCode){
            case 1:{
                return this.OpCodeAdd;
            }
            case 2:{
                return this.OpCodeMultiply;
            }
            case 99: {
                return this.OpCodeHalt;
            }
            default: {
                throw new Error(`Unknown OpCode: ${opCode}`);
            }
        }
    }

    OpCodeAdd : IOpCodeOperation = {
        Invoke : (firstNumber: number, secondNumber: number) : number =>{
            return firstNumber + secondNumber;
        }
    }
    OpCodeMultiply : IOpCodeOperation = {
        Invoke : (firstNumber: number, secondNumber: number) : number =>{
            return firstNumber * secondNumber;
        }
    }
    OpCodeHalt : IOpCodeOperation = {
        Invoke : (firstNumber: number, secondNumber: number) : number =>{
            this.haltExecution = true;
            return 0;
        }
    }
}
export interface IOpCodeOperation{
    Invoke(firstNumber: number, secondNumber: number) : number;
}