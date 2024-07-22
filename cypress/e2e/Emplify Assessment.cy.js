describe("test", () => {
    it("Should switch the business ID", () => {

      //Launch URL
      cy.visit("https://mplify-stage-dev.surge.sh/#/");
      cy.xpath("//input[@placeholder='hello@gmail.com']").type("testtest@gmail.com");
      cy.xpath("//input[@placeholder='password']").type("test1234567890");
      cy.xpath("//button[normalize-space()='Login']").click();
      cy.wait(25000);
      cy.xpath("//div[@class='bo-header-user-details-service']").should("be.visible");
      cy.xpath("//div[@class='bo-header-user-details-service']")
        .should("be.visible")
        .trigger("mouseover", { force: true });
      cy.xpath("//div[@class='select-wrapper']").invoke(
        "css",
        "visibility",
        "visible"
      );





      //SWITCH BUSINESS FLOW

      cy.xpath("//select[@class='select__input']").select("Asia’s Realty", {
        force: true,
      });
      cy.wait(6000);

      cy.get('.bo-business-activity-main-wrapper > a').should("be.visible").click();  
      //cy.xpath("//div[@class='start-day-btn']").should("be.visible").click();   
      cy.wait(15000);
      const imagePath = "./images/selfieNew.jpg";
      cy.get('.webrtc-comp-picture').invoke("css", "opacity", "1");
      //cy.xpath("//div[@class='wr-camera']").invoke("css", "opacity", "1");
      cy.get('.camera-icon > img')
      //cy.xpath("//div[@class='webrtc-comp-picture']").should("be.visible");
      cy.xpath("//div[@class='webrtc-comp-picture']").then((subject) => {
        cy.fixture(imagePath).then((fileContent) => {
          const blob = Cypress.Blob.base64StringToBlob(fileContent, "image/png");
          const testFile = new File([blob], "selfieNew.jpg", {
            type: "image/jpg",
          });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(testFile);
  
          const input = document.createElement("input");
          input.type = "file";
          input.files = dataTransfer.files;
          subject[0].appendChild(input);
  
          cy.wrap(input).trigger("change", { force: true });
        });
      });
      cy.xpath("//textarea[@placeholder='Add any other comments here']").type(
        "Selfie successfully uploaded."
      );
      cy.xpath("//button[normalize-space()='Start']").click();
      cy.get('.modal-submit > div > .btn').click();
      //span[normalize-space()='Contact management']
      //cy.xpath("sidebar-list-item-name").click();
      cy.get('.webrtc-comp-picture > input').click()
      cy.get('.webrtc-comp-snapactions > span').click()
      cy.get('[style="cursor: pointer;"]').click()
      cy.get('.modal-submit > div > .btn').click()
      cy.get('.success-modal-button > div > .btn').click()
      cy.get(':nth-child(2) > a > div > .sidebar-list-item-toggle > img').click()
      cy.wait(2000);
      cy.xpath("//a[normalize-space()='Contacts']").click();






      //ADD CONTACT FLOW

      cy.wait(3000);
      cy.xpath("//span[normalize-space()='+Add']").click();
      cy.wait(2000);
      //cy.xpath("//button[normalize-space()='Continue']").click();
      cy.wait(2000);
      cy.xpath("//input[contains(@placeholder,'e.g Solomon Peters')]").type("Omobola Adebisi");
      cy.xpath(
        "//div[@class='default-contact-input']//input[@placeholder='08012345678']").type("08024543123");
      cy.xpath("//input[contains(@placeholder,'e.g Delight enterprises')]").type("EmplifyTech Ltd.");
      cy.xpath("//select[@class='select__input pointer-initial']").select("test");
      cy.wait(1000);
      cy.xpath("//button[normalize-space()='Next']").click();

      cy.wait(4000);
      cy.xpath("//div[contains(@class,'css-1hwfws3')]").type("Option 1{enter}");
      cy.xpath("//form[@id='addContactForm']//select[contains(@class,'select__input')]").select("Large", {
        force: true,
      });
      cy.xpath("//input[contains(@placeholder,'Main specialization')]").type("Automation Testing");
      cy.xpath("//button[normalize-space()='Save Contact']").click();
      cy.wait(1000);
      cy.xpath("//p[normalize-space()='Skip Verification']").click();
      cy.wait(6000);
      cy.get('[style="margin-right: 15px;"] > div > .btn').click()
    });
  });
  