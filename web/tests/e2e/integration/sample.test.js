/* eslint-disable */

describe('Sample tests', () => {
  it('Visits index page', () => {
    cy.visit('/');
    cy.contains('h1', 'web');
  });
});
