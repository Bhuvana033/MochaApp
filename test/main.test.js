import axios from "axios";
import { expect } from "chai";

// const expect = chai.expect;


describe('My BigCommerce App', () => {
  it('should load the homepage', async () => {
    const response = await axios.get('https://bixwarebigcommerce.bixware.app');
    expect(response.status).to.equal(400);
  });
  it('should load the settings', async () => {
    const response = await axios.get('https://bixwarebigcommerce.bixware.app/settings');
    expect(response.status).to.equal(200);
  });
});