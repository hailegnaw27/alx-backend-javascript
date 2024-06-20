const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('calls console.log with the right arguments', () => {
    // Spy on console.log method
    const bigBrother = sinon.spy(console);
    
    // Stub calculateNumber method of Utils
    const dummy = sinon.stub(Utils, 'calculateNumber');
    dummy.returns(10); // Stub return value
    
    // Call the function to test
    sendPaymentRequestToApi(100, 20);
    
    // Assertions
    expect(dummy.calledWith('SUM', 100, 20)).to.be.true;
    expect(dummy.callCount).to.be.equal(1);
    expect(bigBrother.log.calledWith('The total is: 10')).to.be.true;
    expect(bigBrother.log.callCount).to.be.equal(1);
    
    // Restore stubs
    dummy.restore();
    bigBrother.log.restore();
  });
});

