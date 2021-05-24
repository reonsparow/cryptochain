const {v1: uuidv1} = require('uuid');
const {verifySignature} = require('../util')

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

update({senderWallet, recipient, amount}) {
    this.outputMap[recipient] = amount;
    this.outputMap[senderWallet.publicKey] = this.outputMap[senderWallet.publicKey]-amount;
    this.input = this.createInput({senderWallet, outputMap: this.outputMap});
}

static validTransaction(transaction){
    const {input:{address, amount, signature}, outputMap} = transaction;
    
    const outputTotal = Object.values(outputMap).reduce((total, outputAmount)=>total+outputAmount);

    if(amount !== outputTotal) {
        console.error(`Invalid transactionn from ${address}`);
        return false;
    }

    if(!verifySignature({publicKey: address, data:outputMap, signature})){
        console.error(`invalid signature from ${address}`)
        return false;
    };

    return true;
};
};

module.exports = Transaction;