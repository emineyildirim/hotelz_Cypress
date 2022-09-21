import HomePage from '../pageObjectRepository/HomePage.cy.js'

describe('',()=>{
    it('Test',()=>{

        const homePage =new HomePage()

        cy.visit('https://www.otelz.com/')

        homePage.getSearchBox().type('istanbul')
        homePage.getSearchBox().should('include.value','istanbul')
        homePage.getSearchBox().clear()
        cy.wait(3000)
        cy.get('[data-testid="locationSearchBtn"]').type('Adilcevaz')
        cy.contains('Adilcevaz').click()
        cy.wait(5000)
        homePage.getSearchButton().click()
        cy.wait(3000)

        cy.get('.sc-ff1798e-0 > .type_3 > .icons').click()
        cy.get(':nth-child(4) > .react-datepicker__day--024').click()
        cy.get(':nth-child(3) > .react-datepicker__month > :nth-child(5) > .react-datepicker__day--028').click()
        cy.wait(3000)
        homePage.getDateSearchBox().click()
        cy.wait(3000)
    
        let price1;
        cy.get('[data-testid="otel-1"] > :nth-child(1) > .right-col > .price').should(($div) => {
            price1 = $div.text();
        });
        cy.get('[data-testid="otel-1"] > :nth-child(1)').click()
        cy.get('.row > .left').scrollIntoView()
        cy.get('div[class="net-price"]').should(($div) => {
            const price2 = $div.text();
            expect(price1).equal(price2);
        });

       
        cy.wait(2000)
       
       cy.get(':nth-child(2) > .col-10 > :nth-child(1) > :nth-child(2)').scrollIntoView()
       cy.get(':nth-child(1) > .select > div > .roomSelectBox').select('1',{force: true})
    
       cy.get('#totalPrice > .btn').click()
       
        cy.get('input[name="customerInfo.name"]').type('Emine')
        cy.get('input[name="customerInfo.surname"]').type('Yıldırım')
        cy.get('input[name="customerInfo.email"]').type('emineyildirim.te@gmail.com')
        cy.get('input[name="customerInfo.phone"]').type('5555555555')
        cy.get('input[name="roomInfo[0].persons[0].name"]').type('Emine')
        cy.get('input[name="roomInfo[0].persons[0].surname"]').type('Yıldırım')
        cy.get('.col-12 > .row > :nth-child(2) > .btn').click()
        cy.get(':nth-child(4) > .type > .row > .payment-col > .text-wrapper > :nth-child(1)').should('contain.text','Online öde')

    })


    })
