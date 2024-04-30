import { v4 as uuidv4 } from 'uuid';

function itemReducer(shoppingItems,action){
    if(action.type == 'add_item'){
        return([
            ...shoppingItems,
            {id:uuidv4(), name:action.itemName,quantity:1}
        ]);
    }else if(action.type == 'increment_item'){
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === action.itemId) {
                item.quantity++;
                return item;
            }
        });
       return newShoppingItems;
    }else if(action.type == 'decrement_item'){
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === action.itemId) {
                item.quantity--;
                return item;
            }
        });
        return newShoppingItems.filter(item => item.quantity > 0);
    }
}

export default itemReducer;