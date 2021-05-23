const { STARTING_BALANCE } = require("../config");

class Wallet{
constructor (){
   this.balance= STARTING_BALANCE;
}

addWallet({balance, publicKey}){
return new Wallet({balance, publicKey});
}

}

module.exports = Wallet;