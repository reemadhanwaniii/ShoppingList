import './InputItem.css';

function InputItem(){
    return(
        <div className="input-item-wrapper">
            <input className='input-item'
                type="text"
                placeholder="Add an Item...."
            />
            <button className='add-item-btn'>
                Add
            </button>
        </div>
    );
}

export default InputItem;