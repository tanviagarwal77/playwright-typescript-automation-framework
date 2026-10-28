import {test, expect} from '../fixtures/base.fixture'


test('valid user can login successfully',async({page,loginpage})=>{


await loginpage.goto();
await loginpage.login('standard_user', 'secret_sauce');

 await expect(page).toHaveURL(/inventory.html/);
 await expect(page.getByText('Products',{exact:true})).toBeVisible();

})

test('invalid user sees a login error', async({page,loginpage})=>{

 
 await loginpage.goto();
 await loginpage.login('standard_user', 'secret_sauce_wrong');

 await expect(
  loginpage.errorMessage
).toContainText(
  'Username and password do not match any user in this service'
);




})