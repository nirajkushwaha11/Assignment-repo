describe('Data insertion and assertion test', () => {
    it('Inserts value into a text field, clicks a button, and asserts the displayed data', () => {
      // the Json data store in the constant variable and insert into the text area and also use for assertion
      const testData = [{"name" : "Bob", "age" : 20, "gender": "male"}, {"name": "George", "age" : 42, "gender": "male"}, {"name":
      "Sara", "age" : 42, "gender": "female"}, {"name": "Conor", "age" : 40, "gender": "male"}, {"name":
      "Jennifer", "age" : 42, "gender": "female"}]
      
     // Visit the webpage
      cy.visit('https://testpages.herokuapp.com/styled/tag/dynamic-table.html');
     // Click on the Table Data      
     cy.xpath("//summary[text()='Table Data']").click()
  
      // Locate the text field and clear the field and insert a Json values
      cy.xpath("//textarea[@id='jsondata']").clear().type(JSON.stringify(testData),{ parseSpecialCharSequences: false });
  
      // Click on the Refresh table  button
      cy.xpath("//button[@id='refreshtable']").click(); 
      
      // read and assert the table data
    cy.xpath('//table[@id="dynamictable"]/tr[position() > 1]').should('have.length', testData.length).each(($row, index) => {
        cy.wrap($row).find('td:nth-child(1)').should('contain', testData[index].name);
        cy.wrap($row).find('td:nth-child(2)').should('contain', testData[index].age);
        cy.wrap($row).find('td:nth-child(3)').should('contain', testData[index].gender);
      });
    });
});