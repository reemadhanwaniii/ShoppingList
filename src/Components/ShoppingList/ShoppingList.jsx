import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ShoppingList.css';

function ShoppingList() {

    const shoppingItems = [
        {id:1,name:"Apple",quantity:5},
        {id:2,name:"papaya",quantity:3},
        {id:3,name:"orange",quantity:4}
    ]

    return(
        <>
            <Header/>
            <ToastContainer/>
            <div className="shopping-input">
                <InputItem/>
                <ItemList
                 shoppingItems={shoppingItems}/>
            </div>
        </>
    )
}

export default ShoppingList;