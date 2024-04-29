import './InputItem.css';
import { showSuccess } from '../../utils/showToast';

function InputItem(){
    return(
        <div className="input-item-wrapper">
            <input className='input-item'
                type="text"
                placeholder="Add an Item...."
            />
            <button className='add-item-btn'
                    onClick={()=>showSuccess('Successfully added item')}>
                Add
            </button>
        </div>
    );
}

export default InputItem;