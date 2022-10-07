/// <reference types="cypress"/>
import { faker } from "@faker-js/faker";

it.skip("Registration", () => {
  cy.visit("/");

  cy.get("#customer_menu_top").click();
  cy.get("#accountFrm button").click();

  cy.get("#AccountFrm_firstname").type("QA");
  cy.get("#AccountFrm_lastname").type("Max");
  cy.get("#AccountFrm_email").type("Qa@max.com");
  cy.get("#AccountFrm_address_1").type("address 1");
  cy.get("#AccountFrm_city").type("SomeCity");
  cy.get("#AccountFrm_zone_id").select(1);
  cy.get("#AccountFrm_postcode").type("36589");
  cy.get("#AccountFrm_country_id").select("United Kingdom");
  cy.get("#AccountFrm_loginname").type("QaMax");
  cy.get("#AccountFrm_password").type("123@Qwer");
  cy.get("#AccountFrm_confirm").type("123@Qwer");
  cy.get("#AccountFrm_newsletter0").click();
  cy.get("#AccountFrm_agree").check();
  cy.get('button[title="Continue"]').click();

  cy.get("h1.heading1").should("contain", " Your Account Has Been Created! ");
});
