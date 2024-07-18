import React, { useState } from 'react';
import './GroceryInput.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GroceryInput() {
    const [item, setItem] = useState('');
    const [arr, setArr] = useState([]);

    function save_item() {
        if (item.trim()) {
            setArr([...arr, { text: item, checked: false }]);
            setItem(''); // Clear the input field after adding the item
            toast.success('Item added successfully!');
        } else {
            toast.error('Please enter an item');
        }
    }

    function remove(itemToRemove) {
        const newItems = arr.filter(bud => bud !== itemToRemove);
        setArr(newItems);
         toast.success('Item deleted successfully!');
    }

    function toggleCheck(index) {
        const newItems = arr.map((bud, i) => {
            if (i === index) {
                return { ...bud, checked: !bud.checked };
            }
            return bud;
        });
        setArr(newItems);
    }

    return (
        <>
            <ToastContainer />
            <div className='container'>
                <h1>Grocery bud</h1>
                <div className='input_box'>
                    <input 
                        type="text" 
                        className='input_box' 
                        value={item} 
                        onChange={(e) => setItem(e.target.value)} 
                    />
                    <button className='add_btn' onClick={save_item}>Add</button>
                </div>
                <div className='saved_item'>
                    {arr.map((bud, index) => (
                        <div className='outputcontainer' key={index}>
                            <input 
                                type="checkbox" 
                                checked={bud.checked} 
                                onChange={() => toggleCheck(index)} 
                            />
                            {bud.checked ? <del><p>{bud.text}</p></del> : <p>{bud.text}</p>}
                            <button onClick={() => remove(bud)}>Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default GroceryInput;
