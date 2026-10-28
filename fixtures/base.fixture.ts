import {test as base } from '@playwright/test'
import {LoginPage } from '../pages/login.page'
import { ProductPage } from '../pages/product.page';
import { CartPage } from '../pages/cart.page';


type FrameworkFixtures={
    loginpage: LoginPage;
    productpage:ProductPage;
    cartpage:CartPage;
}

export const test=base.extend<FrameworkFixtures>({
    loginpage:async({page},use)=>{

        const loginpage=new LoginPage(page);
        await use(loginpage);
    },
    productpage:async({page},use)=>{
        const productpage=new ProductPage(page);
        await use(productpage);
    },
    cartpage:async({page},use)=>{
        const cartpage= new CartPage(page);
        await use(cartpage);
    }

});

export { expect} from '@playwright/test' 