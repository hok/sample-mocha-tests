import chai from 'chai';
const { expect } = chai;

describe('Failing sample tests', function() {
  it('one should be equal to one', function() {
    expect(1).to.equal(1);
  });

  it('one should be equal to two', function() {
    expect(1).to.equal(2);
  });
});