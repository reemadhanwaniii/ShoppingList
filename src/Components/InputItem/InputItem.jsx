import './InputItem.css';
import { showError, showSuccess } from '../../utils/showToast';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function InputItem({ addItem }){
    //console.log(uuidv4());


    const { register,handleSubmit, formState: { errors }} = useForm({mode: 'onChange'});

    const handleFormSubmit = (data) => {
        // e.preventDefault();
        // addItem(itemName);
        // setItemName('');
        // showSuccess('Successfully added item')
        // console.log(data);

        addItem(data.item);
        showSuccess('Successfully added item')
    }


    useEffect(()=>{
        if(errors.item && errors.item.type === "required"){
            showError("Item cannot be empty");
        }
        if(errors.item && errors.item.type === "minLength"){
            showError("item is invalid");
        }
    },[errors.item && errors.item.type])

    return(
        <div className="input-item-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <input className='input-item'
                    type="text"
                    placeholder="Add an Item...."
                    name="item"
                    {...register("item",{required: true, minLength: 3})}
                />
                
                <button className='add-item-btn'>
                    Add
                </button>
            </form>
            <div>
                    {/* {errors.item && errors.item.type === "required" && <p>Item is missing</p>}
                    {errors.item && errors.item.type === "minLength" && <p>Item name is not valid</p>} */}
            </div>
        </div>
    );
}

export default InputItem;