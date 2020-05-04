function BaseBuilder(value) {  
    this.value = value;    
}

// Class with Inheritance es6

class IntBuilder {
    constructor(number){
        number = typeof 
        number ==='number'? number : 0;
        BaseBuilder.call(this, number)       
    }    
    plus = function(...number) {
       this.value = this.value + number.reduce((accumulator,currentValue) => accumulator + currentValue)
       return `${this.value}`
    }
    minus = function (...number) {
        this.value = this.value - number.reduce((accumulator,currentValue) => accumulator + currentValue)
        return `${this.value}`        
    }
    multiply = function (number) {
        this.value = this.value * number
        return `${this.value}`
    }
    divide = function (number) {
        this.value = this.value / number
        return `${this.value}`
    }
    mod = function (number) {
        this.value = this.value % number
        return `${this.value}`
    }
    get = function () {
        return `${this.value}`;
    }
    static random(min, max){
       this.value = Math.floor(Math.random() * (max - min)) + min
       return `${this.value}`
    }

}

let intBuilder = new IntBuilder(10)

//Testing 
console.log('Class with Inheritance es6')
console.log("Static radom: " + IntBuilder.random(10,100))
console.log("Plus: " + intBuilder.plus(2,3,2))
console.log("Minus: " + intBuilder.minus(1,2))
console.log("Multipliy: " + intBuilder.multiply(2))
console.log("Divide: " + intBuilder.divide(4))
console.log("Mod: " + intBuilder.mod(3))
console.log("Get: " + intBuilder.get())

// Class with Inheritance es5

function StringBuilder (str){
    str = typeof 
    str ==='string'? str :' ';
    BaseBuilder.call(this,str)
}

StringBuilder.prototype.plus = function(...str){    
    this.value = `${this.value}${str.join('')}`
    return `${this.value}`
}

StringBuilder.prototype.minus = function(n){    
    let pieceStr = this.value.length - n
    this.value = this.value.slice(0,pieceStr)
    return `${this.value}`
}

StringBuilder.prototype.multiply = function(n){ 
    const repeat = new Array(n)   
    this.value = repeat.fill(this.value).join('').trim()
    return `${this.value}`
}

StringBuilder.prototype.divide = function(n){      
    let k = Math.floor(this.value.length / n)
    this.value = this.value.slice(0, k)
    return `${this.value}`
}

StringBuilder.prototype.remove = function(str){
     this.value = this.value.split('').filter(ltr => ltr != str).join('')
    return `${this.value}`
}
StringBuilder.prototype.sub = function(from, n){        
    this.value = this.value.slice(from,n)
    return `${this.value}`
}
StringBuilder.prototype.get = function(){     
    return `${this.value}`
}

//testing
let stringBuilder = new StringBuilder('Hello')
console.log('Class with Inheritance es5')
console.log("Plus: " + stringBuilder.plus(' all', '!'))
console.log("Minus: " + stringBuilder.minus(4))
console.log("Multipliy: " + stringBuilder.multiply(3))
console.log("Divide: " + stringBuilder.divide(4))
console.log("Remove: " + stringBuilder.remove('l'))
console.log("Sub: " + stringBuilder.sub(1))
console.log("Get: " + stringBuilder.get())