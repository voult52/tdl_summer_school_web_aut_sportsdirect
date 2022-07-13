
import HomePage from "../pageObjects/HomePage";
//     1. Create a new repository in your git (add readme file, add git ignore file based on node) -> tdl_summer_school_web_aut_sportsdirect
// 2. Clone it to your local machine, create new cypress project in it (npm init, npm install cypress --save-dev)
// 3. Automate the following scenario based on https://lv.sportsdirect.com/

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    
//   - Open Sportsdirect page
    HomePage.visit();
  });
  it("Scenario 1", () => {
//   - Click on Brands menu option
    HomePage.Button_Brands.click()
//   - Click on Addidas logo
    HomePage.Button_OpenAdidasLogo.click()
//   - Select Trainers option (in middle of page)
    HomePage.Button_trainersOption.click()
//   - Check the following checkboxes:
    
//     - Mens
    HomePage.Button_SelectMens.click()
//     - Trainers
    HomePage.Button_SelectTrainers.click()
//     - Court Trainers
    HomePage.Button_SelectCourtTrainers.click()
//     - Leather
    HomePage.Button_SelectBLeather.click()

//     - Black
    HomePage.Button_SelectBlack.click()

// -  Validate that 2 product boxes are visible
    HomePage.Validate_countOfProducts.should("have.length", 2)
// - Open box that contains "SE Trainers"
    HomePage.Button_SETRainers.click()
// - Validate product title "Grand Court SE Trainers Mens"
    HomePage.Validate_SETRainers.should("have.text", "Grand Court SE Trainers Mens")
// 4. Push the changes you made to that git repository.
// 5. Send me link to your repo in discord dm. 
  });
  
});
