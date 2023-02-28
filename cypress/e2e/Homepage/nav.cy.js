import HomePage from "../../pages/Homepage"
import Action from "../../utils/Action"
import Assert from "../../utils/Assert"

describe('check navbar', () => {

  beforeEach(() => {
    HomePage.open()
  })

  it('axis', () => {    
    Action.clickElement(HomePage.axis)
  })

  it('about us', () => {    
    Action.clickElement(HomePage.aboutus)
  })

  it('news n media', () => {    
    Action.clickElement(HomePage.newsnmedia)
  })

  it('careers', () => {    
    Action.clickElement(HomePage.careers)
  })

  it('contact us', () => {    
    Action.clickElement(HomePage.contactus)
  })
  
})