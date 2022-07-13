import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "https://lv.sportsdirect.com/";
  }

  static get Button_Brands() {
    return cy.get('#lnkTopLevelMenu_2579840')
  }

  static get Button_OpenAdidasLogo() {
    return cy.get('.Adidas')
  }

  static get Button_trainersOption() {
    return cy.get('.swiper-slide-next > a > .slideName')
  }

  static get Button_SelectMens() {
    return cy.get('[data-productname="Mens"] > .FilterAnchor > .SelectableFilter')
  }

  static get Button_SelectTrainers() {
    return cy.get('[data-productname="Trainers"] > .FilterAnchor > .SelectableFilter')
  }

  static get Button_SelectCourtTrainers() {
    return cy.get('[data-productname="Court Trainers"] > .FilterAnchor > .SelectableFilter')
  }

   static get Button_SelectBlack() {
    return cy.get('[data-productname="Black"] > .FilterAnchor > .SelectableFilter')
  }
  static get Button_SelectBLeather() {
    return cy.get('[data-productname="Leather"] > .FilterAnchor > .SelectableFilter')
  }
  static get Validate_countOfProducts() {
    return cy.get('.s-productthumbbox')
  }

  static get Button_SETRainers() {
    return cy.get('[li-productid="16302903"]')
  }
  static get Validate_SETRainers() {
    return cy.get('#lblProductName')
  }
  
}

export default HomePage;
