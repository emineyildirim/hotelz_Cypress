class HomePage{

    getSearchBox(){
       return cy.get('[data-testid="locationSearchBtn"]') 
    }

    getDateSearchBox(){
        return cy.get('#searchbar_3 > :nth-child(1) > .btn')
    }

    getSearchButton(){
        return cy.contains('Ara')
    }

    getMakeAReservation(){
        return cy.get('[data-testid="minPriceResButton"]')
    }

}
export default HomePage