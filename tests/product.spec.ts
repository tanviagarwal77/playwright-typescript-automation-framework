import {test, expect} from '../fixtures/base.fixture';


test('user should be able to login, view product inventory, and add product to cart and open the car ',async({page,loginpage,productpage,cartpage})=>{
    
await loginpage.goto();
await loginpage.login('standard_user', 'secret_sauce');

await expect (productpage.expectProductPageTitle());
await productpage.addProductToCart('Sauce Labs Backpack');
await productpage.expectcartcount(1);
await productpage.opencart();
await cartpage.expectCartPageTitle();
await cartpage.expectProductInCart('Sauce Labs Backpack');
await cartpage.removeProduct('Sauce Labs Backpack');
await cartpage.expectProductNotInCart('Sauce Labs Backpack');   





}
    )