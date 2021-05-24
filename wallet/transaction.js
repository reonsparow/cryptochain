const {v1: uuidv1} = require('uuid');
class Transaction {
    constructor({senderWallet, recipient, amount}){
        this.id = uuidv1();
        this.outputMap = this.createOutputMap({senderWallet, recipient, amount});
        this.input = this.createInput({senderWallet, outputMap: this.outputMap});
        // this.senderWallet = senderWallet,
        // this.recipient = recipient,
        // this.amount = amount
    }

    createOutputMap({senderWallet, recipient, amount}){
        const outputMap = {};

        outputMap[recipient] = amount;
        outputMap[senderWallet.publicKey] = senderWallet.balance-amount;

        return outputMap;
    }
createInput({senderWallet, outputMap}){
return {
    timestamp : Date.now(),
    amount : senderWallet.balance,
    address : senderWallet.publicKey,
    signature: senderWallet.sign(outputMap)
};
};

}

module.exports = Transaction;