//POO en javaScript


class calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
//metodo
    sum(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
    rest(valueA, valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA - this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(3,5));
console.log(calc.rest(5,3));