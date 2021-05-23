const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', ()=>{
    it ('genarates a SHA-256 hashed output', ()=>{
        expect(cryptoHash('mehbuba')).toEqual('fb45274df510415ba0ae046bd3523c837815857250d295c59ee27c7ccc88bf06')
    });

    it('produces the same hash with the same input argument in any order', ()=>{
        expect(cryptoHash('one','two','three')).toEqual(cryptoHash('three', 'one','two'));
    });
})