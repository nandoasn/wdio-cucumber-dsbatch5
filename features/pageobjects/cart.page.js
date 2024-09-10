import Page from "./page";
import { $, expect } from '@wdio/globals'

class CartPage extends Page {

    get checkoutButton(){
        return $("#checkout")
    }
    get continueShoopingButton(){
        return $("#continue-shopping")
    }

    get itemCart(){
        return $("#cart_contents_container")
    }

    async validateonCart(){
        await expect(this.continueShoopingButton).toBeExisting();
        await expect(this.checkoutButton).toBeExisting();
        await expect(this.itemCart).toBeExisting();
    }
    
    open(){
        return super.open("cart.html")
    }

}

export default new CartPage();