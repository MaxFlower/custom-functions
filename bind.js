function bindFn(originFn, context, ...extArgs) {
    return function(...intArg) {
        return originFn.call(context, [...extArgs, ...intArg]);
    }
}

function BankAccount(name) {
    this.clientName = name;
}

function showName() {
    return this.clientName;
}

const tomAccount = new BankAccount('Tom');
const myAccount = new BankAccount('Maksim');

console.log('Tom`s balance', bindFn(showName, tomAccount)());
console.log('My balance', bindFn(showName, myAccount)());
console.log('Context can be bound once', bindFn(bindFn(showName, myAccount), tomAccount)());
