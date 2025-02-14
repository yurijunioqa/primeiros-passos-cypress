import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage()

const dashboardPage = new DashboardPage()

const menuPage = new MenuPage()

const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.userName, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('Broski', 'Broski', 'Broski')
    myInfoPage.fillEmployeeDetails('123', '321', '555', '2025-14-02')
    myInfoPage.fillStatusDetails()
    myInfoPage.submitInfoUpdate()
    myInfoPage.checkSuccessMessage()

  })
  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.userName, userData.userSuccess.password)
    loginPage.checkAccessInvalid()
  })  
})