import {type Page ,type Locator, expect} from '@playwright/test'

export class ProductPage{
    readonly page:Page;
    readonly pageTitle:Locator;
    readonly inventoryitems:Locator;
    readonly cartbadge:Locator;
    readonly cartlink:Locator;


    constructor(page:Page){
     this.page=page;
     this.pageTitle=page.getByText('Products',{exact:true});
     this.inventoryitems=page.locator('.inventory_item');
     this.cartbadge = page.locator('.shopping_cart_badge');
     this.cartlink = page.locator('[data-test="shopping-cart-link"]');

    }

    async expectProductPageTitle():Promise<void>{
        await expect(this.pageTitle).toBeVisible();
    }
    async addProductToCart(productname:string):Promise<void>{
        const product=this.inventoryitems.filter({
            hasText:productname,
        });
        await expect(product).toHaveCount(1);
        await product.getByRole('button',{name:'Add to cart'}).click();

    }
    async expectcartcount(count:number):Promise<void>{

        if(count==0){

            await expect(this.cartbadge).toHaveCount(0);
            return;
        }
        await expect(this.cartbadge).toHaveText(String(count));
    }
    async opencart():Promise<void>{
        console.log('Current URL:', this.page.url());
        console.log('Cart link count:', await this.cartlink.count());
        await expect(this.cartlink).toBeVisible();
        await expect(this.cartlink).toBeEnabled();
        await this.cartlink.click();
    }
}