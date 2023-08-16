import React, { useContext } from "react";
import { CartContext } from "./AddToCart";
import axios from "axios";
import { useState, useEffect } from "react";
import {useDispatch} from "react-redux";
import { handleDecreaseQuantity, handleDeleteItem, handleIncreaseQuantity } from "../../Redux/action";

const Item = (props) => {

    const [data, setData] = useState(null);
    const dispatch = useDispatch()


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/products2/${props.id}`);
            setData(response.data);
            // console.log(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleIncrement = () => {
        dispatch(handleIncreaseQuantity(props.id));
    }
    const handleDecrement = () => {
        dispatch(handleDecreaseQuantity(props.id));
    }

    const handleRemove = () => {
        dispatch(handleDeleteItem(props.id));
    }

    return (
        <>
            {data ? (
                <div className='items-info'>
                    {/* Your JSX code here */}
                    <div className='product-img'>
                        <img src={data.image} alt='imag' />
                    </div>

                    <div className='title'>
                        <h2>{data.name}</h2>
                        <p>{data.weight}</p>
                    </div>

                    <div className='add-minus-quantity'>
                        <i className="fas fa-minus minus" onClick={handleDecrement}></i>
                        <input type='text' placeholder={props.quantity} disabled />
                        <i className="fas fa-plus add" onClick={handleIncrement}></i>

                    </div>
                    <div className='price'>
                        <h3>{data.cost} ₹</h3>

                    </div>
                    <div className='remove-item'>
                        <i className="fas fa-trash-alt remove" onClick={handleRemove}></i>
                    </div>

                </div>
            ) : (
                <div>Loading...</div>
            )}
            <hr className="line" />

        </>
    )
}
export default Item;







            // <div className='items-info'>
            //     <div className='product-img'>
            //         <img src={data.image} alt='imag' />
            //     </div>

            //     <div className='title'>
            //         <h2>{data.name}</h2>
            //         <p>{data.weight}</p>
            //     </div>

            //     <div className='add-minus-quantity'>
            //         <i className="fas fa-minus minus"></i>
            //         <input type='text' placeholder={props.quantity} disabled />
            //         <i className="fas fa-plus add"></i>

            //     </div>
            //     <div className='price'>
            //         <h3>{data.cost} ₹</h3>

            //     </div>
            //     <div className='remove-item'>
            //         <i className="fas fa-trash-alt remove"></i>
            //     </div>
            // </div>