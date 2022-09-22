import HomePage2 from "../pageObjectRepository/HomePage2.cy.js"

describe('',()=>{
    it('Test',()=>{
        const homePage =new HomePage2()
        cy.visit('https://www.otelz.com/')
        homePage.searchBoxClickWrite('istanbul')
        cy.wait(3000)
        homePage.searchBoxClickWrite('Adilcevaz')
        cy.contains('Adilcevaz').click()
        cy.wait(5000)
        homePage.getSearchButton().click()
        cy.wait(3000)
        homePage.selectAndSearchDate()
        cy.wait(3000)
        homePage.hotelPriceAsserts()
        cy.wait(2000)
        homePage.selectRoom()
        cy.wait(2000)
        homePage.reservationPage('Emine','Yıldırım','emineyildirim.te@gmail.com','5555555555')
        homePage.paymentPage('Online öde')
    })
})
