import Item from '../Item/Item';
import './ItemList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { showError } from '../../utils/showToast';
import React from 'react';

function ItemList({ shoppingItems,addQuantity,descQuantity }){
    console.log("inside itemlist ")
    return(
        <div className='shopping-items-wrapper'>
            {
                shoppingItems && shoppingItems.map((item)=>{
                    return (
                        <div key={item.id} className='items-list'>
                            <div className='change-quantity add-item'
                                onClick={()=>addQuantity(item.id)}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                            </div>
                                <Item 
                                    itemName={item.name}
                                    quantity={item.quantity}
                               />
                            <div className='change-quantity remove-item'
                                onClick={()=>{
                                    if(item.quantity == 1) showError(`${item.name} removed from the list`)
                                    descQuantity(item.id)
                                }}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default React.memo(ItemList);