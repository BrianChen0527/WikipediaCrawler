// LESSON 11 - 13: classes and constructors and access modifiers
export class Invoice {
    // private reciever: string;
    // public details: string;
    // readonly amount: number;
    // constructor(reciever: string, details: string, amount: number){
    //     this.reciever = reciever
    //     this.details = details
    //     this.amount = amount
    // }
    // if u have access modifiers to add before contructor parameters, you can condense 
    // all the lines of code commented out above into something like this:
    constructor(sender, details, amount) {
        this.sender = sender;
        this.details = details;
        this.amount = amount;
    }
    // create a formatted output
    format() {
        return `${this.sender} has paid ${this.amount} dollars for ${this.details}`;
    }
}
