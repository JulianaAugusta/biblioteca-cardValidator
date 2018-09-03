const chai = require('chai');
const expect = chai.expect;
const card = require('../index')

describe('Card', function() {
  describe('#cardValidator', function() {
    describe('Quando não houver parametro', function(){
      it('deve lançar um erro', function(){
        var badFn = function () { card.cardValidator(); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando o numero for uma string', function(){
      it('deve lançar um erro', function(){
        var badFn = function () { card.cardValidator('essa string'); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando houver apenas um digito', function(){
      it('deve lançar um erro', function(){
        var badFn = function () { card.cardValidator(1234); };
        expect(badFn).to.throw(Error);
      });
    });
    describe('Quando o numero for valido', function(){
      it('retornar true', function(){
        expect(card.cardValidator(541187103745124)).to.be.true;
      });
    });
    describe('Quando o numero for invalido', function(){
      it('retornar false', function(){
        expect(card.cardValidator(5555666677778883)).to.be.false;
      });
    });
  });
});
