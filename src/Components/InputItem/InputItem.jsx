import './InputItem.css';
import { showSuccess } from '../../utils/showToast';
import { useState } from 'react';
//import { v4 as uuidv4 } from 'uuid';

function InputItem({ addItem }){
    //console.log(uuidv4());

    const [itemName,setItemName] = useState('');

    return(
        <div className="input-item-wrapper">
            <input className='input-item'
                type="text"
                placeholder="Add an Item...."
                value={itemName}
                onChange={(e)=>setItemName(e.target.value)}
            />
            <button className='add-item-btn'
                    onClick={()=>{
                        addItem(itemName);
                        setItemName('');
                        showSuccess('Successfully added item')
                    }
                }>
                Add
            </button>
        </div>
    );
}

export default InputItem;