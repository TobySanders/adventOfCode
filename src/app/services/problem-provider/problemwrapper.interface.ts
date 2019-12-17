import { Problem } from "./problem.interface";

export interface ProblemWrapper{
    Id : number
    Title : string;
    Problems : Problem[]
}