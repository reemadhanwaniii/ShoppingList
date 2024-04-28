import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from "../ItemList/ItemList";
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
            <div className="shopping-input">
                <InputItem/>
                <ItemList
                 shoppingItems={shoppingItems}/>
            </div>
        </>
    )
}

export default ShoppingList;