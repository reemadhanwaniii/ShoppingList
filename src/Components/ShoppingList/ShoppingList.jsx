import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ShoppingList.css';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

function ShoppingList() {

    const [shoppingItems,setShoppingItems] = useState([]);

    function handleAddItem(itemName) {
        setShoppingItems([
            ...shoppingItems,
            {id:uuidv4(), name:itemName,quantity:1}
        ]);
    }

    function handleAddQuantity(itemId){
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === itemId) {
                item.quantity++;
                return item;
            }
        });
        setShoppingItems(newShoppingItems);
    }

    function handleDescQuantity(itemId){
        let newShoppingItems = shoppingItems.map((item)=>{
            if(item.id === itemId) {
                item.quantity--;
                return item;
            }
        });
        newShoppingItems = newShoppingItems.filter(item => item.quantity > 0);
        setShoppingItems(newShoppingItems);
    }
    

    return(
        <>
            <Header/>
            <ToastContainer/>
            <div className="shopping-input">
                <InputItem
                  addItem={handleAddItem}
                />
                <ItemList
                 shoppingItems={shoppingItems}
                 addQuantity={handleAddQuantity}
                 descQuantity={handleDescQuantity}/>
            </div>
        </>
    )
}

export default ShoppingList;