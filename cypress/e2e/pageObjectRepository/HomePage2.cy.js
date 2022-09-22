class HomePage2{
elements = {
    roomVisibility:()=>cy.get(':nth-child(2) > .col-10 > :nth-child(1) > :nth-child(2)'),
    searchBox:()=>cy.get('[data-testid="locationSearchBtn"]'),
    dateIcon:()=> cy.get('.sc-ff1798e-0 > .type_3 > .icons'),
    selectDate1:()=> cy.get(':nth-child(4) > .react-datepicker__day--024'),
    selectDate2:()=>cy.get(':nth-child(3) > .react-datepicker__month > :nth-child(5) > .react-datepicker__day--028'),
    searchDate:()=>cy.get('#searchbar_3 > :nth-child(1) > .btn'),
    selectBoxRoom:()=>cy.get(':nth-child(1) > .select > div > .roomSelectBox'),
    makeReservation:()=>cy.get('#totalPrice > .btn'),
    name_e:()=>cy.get('input[name="customerInfo.name"]'),
    surname_e:()=>cy.get('input[name="customerInfo.surname"]'),
    email_e:()=>cy.get('input[name="customerInfo.email"]'),
    phone_e:()=>cy.get('input[name="customerInfo.phone"]'),
    goPayPage:()=>cy.get('.col-12 > .row > :nth-child(2) > .btn'),
    name_roomPerson:()=>cy.get('input[name="roomInfo[0].persons[0].name"]'),
    surname_roomPerson:()=>cy.get('input[name="roomInfo[0].persons[0].surname"]'),
    onlinePaymentOption:()=>cy.get(':nth-child(4) > .type > .row > .payment-col > .text-wrapper > :nth-child(1)'),
    price1Locator:()=>cy.get('[data-testid="otel-1"] > :nth-child(1) > .right-col > .price'),
    price2Locator:()=>cy.get('div[class="net-price"]'),
    hotelFirst:()=>cy.get('[data-testid="otel-1"] > :nth-child(1)'),
  };

  searchBoxClickWrite(city){
    this.elements.searchBox().click()
    this.elements.searchBox().clear()
    this.elements.searchBox().type(city)
    this.elements.searchBox().should('include.value',city);
  }

  selectAndSearchDate(){
    this.elements.dateIcon().click()
    this.elements.selectDate1().click()
    this.elements.selectDate2().click()
    this.elements.searchDate().click()

 }
 selectRoom(){
    this.elements.roomVisibility().scrollIntoView()
    this.elements.selectBoxRoom().select('1',{force: true})
    this.elements.makeReservation().click()
 }

 reservationPage(name,surname,email,phone){
    this.elements.name_e().type(name)
    this.elements.surname_e().type(surname)
    this.elements.email_e().type(email)
    this.elements.phone_e().type(phone)
    this.elements.name_roomPerson().type(name)
    this.elements.surname_roomPerson().type(surname)
    this.elements.goPayPage().click()
 }

 paymentPage(option){
    this.elements.onlinePaymentOption().should('contain.text',option)
 }

 hotelPriceAsserts(){
    let price1;
    this.elements.price1Locator().should(($div) => {
        price1 = $div.text();
    });
    this.elements.hotelFirst().click()
    cy.get('.row > .left').scrollIntoView()
    this.elements.price2Locator().should(($div) => {
        const price2 = $div.text();
        expect(price1).equal(price2);
    });

 }
 getSearchButton(){
    return cy.contains('Ara')
}
}

 export default HomePage2

