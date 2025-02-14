class MyInfoPage {
    selectorsList () {
        const selectors = {
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: ".--close",
            submitButton: ".orangehrm-left-space",
            selectionListButton: ".oxd-select-text--arrow",
            fifthItemOnFirstList: ".oxd-select-dropdown > :nth-child(5)",
            ThirdItemOnSecondList: ".oxd-select-dropdown > :nth-child(3)"
        }

        return selectors
    }


    fillProfileInfo () {
        cy.get(this.selectorsList().firstNameField).clear().type('Broski')
        cy.get(this.selectorsList().middleNameField).clear().type('Broski')
        cy.get(this.selectorsList().lastNameField).clear().type('Broski')
        cy.get(this.selectorsList().genericField).eq(3).clear().type(112)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(112)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(112)
        cy.get(this.selectorsList().dateField).eq(0).clear().type("2025-25-02")
        cy.get(this.selectorsList().dateCloseButton).click()
        cy.get(this.selectorsList().selectionListButton).eq(0).click()
        cy.get(this.selectorsList().fifthItemOnFirstList).click()
        cy.get(this.selectorsList().selectionListButton).eq(1).click()
        cy.get(this.selectorsList().ThirdItemOnSecondList).click()
    }

    submitInfoUpdate () {
        cy.get(this.selectorsList().submitButton).eq(0).click({force: true})
    }

    checkSuccessMessage () {
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
}

export default MyInfoPage