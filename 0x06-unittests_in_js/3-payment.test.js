const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('uses the calculateNumber method of Utils', () => {
    // Spy on the Utils module's methods
    const bigBrother = sinon.spy(Utils);

    // Call the function to test
    sendPaymentRequestToApi(100, 20);

    // Verify calculateNumber was called with correct arguments
    expect(bigBrother.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    
    // Check that calculateNumber was called exactly once
    expect(bigBrother.calculateNumber.callCount).to.be.equal(1);
    
    // Restore the original method
    bigBrother.calculateNumber.restore();
  });
});

