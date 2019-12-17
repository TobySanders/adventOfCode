export interface IProblemResolver{
    ResolveProblem(input: string) : string
    ResolveAdvancedProblem(input: string) : string
}