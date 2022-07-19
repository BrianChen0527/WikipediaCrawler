export interface HasFormatter{
    format(): string
}

interface isPerson{
    name: string
    age: number
    speak(a: string): void
    run(a: number): number
}

