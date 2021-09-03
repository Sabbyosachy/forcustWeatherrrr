const Bank = owner => {
    balance = 0;
    return amount => {
        balance = balance + amount;
        return balance;
    }
}
let Mofij = Bank('Mofiz');
Mofij(100);
console.log(Mofij);