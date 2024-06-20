const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let bigBrother;

  beforeEach(() => {
    // Create a spy on console.log before each test
    bigBrother = sinon.spy(console);
  });

  afterEach(() => {
    // Reset the history of calls to console.log after each test
    bigBrother.log.resetHistory();
  });

  it('logs "The total is: 120" to the console for sendPaymentRequestToApi(100, 20)', () => {
    sendPaymentRequestToApi(100, 20);
    expect(bigBrother.log.calledWith('The total is: 120')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });

  it('logs "The total is: 20" to the console for sendPaymentRequestToApi(10, 10)', () => {
    sendPaymentRequestToApi(10, 10);
    expect(bigBrother.log.calledWith('The total is: 20')).to.be.true;
    expect(bigBrother.log.calledOnce).to.be.true;
  });
});

