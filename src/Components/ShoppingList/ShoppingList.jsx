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
import { ShoppingDispatchContext,ShoppingItemsContext } from "../../providers/ShoppingContext";


function ShoppingList() {

    //const [shoppingItems,setShoppingItems] = useState([]);
    const [shoppingItems,dispatch] = useReducer(itemReducer,[]);

   
    return(
        <>
        <ShoppingItemsContext.Provider value={shoppingItems}>
            <ShoppingDispatchContext.Provider value={dispatch}>
            <Header/>
            <ToastContainer/>
            <div className="shopping-input">
                <InputItem/>
                <ItemList/>
            </div>
            </ShoppingDispatchContext.Provider>
          </ShoppingItemsContext.Provider>
        </>
    )
}

export default ShoppingList;