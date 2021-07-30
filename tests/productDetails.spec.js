const assert = require('assert');
const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste que o retorno da função é um array.
    assert.strictEqual(typeof (productDetails('string1', 'string2')), typeof ([]));
    // Teste que o array retornado pela função contém dois itens dentro.
    assert.strictEqual(productDetails('stringA', 'stringB').length, 2);
    // Teste que os dois itens dentro do array retornado pela função são objetos.
    assert.deepStrictEqual(typeof (productDetails('stringA', 'stringB')[0]), typeof ({}));
    assert.deepStrictEqual(typeof (productDetails('stringA', 'stringB')[1]), typeof ({}));
    // Teste que os dois objetos são diferentes entre si.
    assert.notDeepStrictEqual(productDetails('string', 'string2')[0], 
    productDetails('string', 'string2')[1]);
    // Teste que os dois productIds terminam com 123.
    assert.deepStrictEqual(productDetails('string0', 'string1')[0].details.productId, 'string0123');
    assert.deepStrictEqual(productDetails('string0', 'string1')[1].details.productId, 'string1123');
  });
});
