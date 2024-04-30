import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ShoppingList.css';
import { useReducer } from "react";
import itemReducer from "../../reducers/itemReducer";
// import { v4 as uuidv4 } from 'uuid';
// import { useState } from "react";



function ShoppingList() {

    //const [shoppingItems,setShoppingItems] = useState([]);
    const [shoppingItems,dispatch] = useReducer(itemReducer,[]);

    function handleAddItem(name) {
      dispatch({
        type: 'add_item',
        itemName: name
      })
    }

    function handleAddQuantity(id){
       dispatch({
        type: 'increment_item',
        itemId: id
       })
    }

    function handleDescQuantity(id){
      dispatch({
        type: 'decrement_item',
        itemId: id
      })
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