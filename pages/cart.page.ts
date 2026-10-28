import { type Locator, type Page, expect } from "@playwright/test";

export class CartPage{
readonly page:Page;
readonly cartheading:Locator;
readonly cartitemname:Locator;




constructor(page:Page){
this.page= page;
this.cartheading=page.locator('.title');
this.cartitemname=page.locator('.cart_item_label');

}

async expectCartPageTitle():Promise<void>{

 await expect(this.cartheading).toBeVisible();


}

async expectProductInCart(productName: string):Promise<void>{
  await expect(this.cartitemname).toContainText(productName);

}

async removeProduct(productName: string):Promise<void>{
const product=this.cartitemname.filter({hasText:productName});
await expect (product).toHaveCount(1);
await product.getByRole('button', { name: 'Remove' }).click();
}

async expectProductNotInCart(productName: string){
const product=this.cartitemname.filter({hasText:productName});
await expect(product).toHaveCount(0);

}

}