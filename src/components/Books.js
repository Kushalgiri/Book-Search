import React from 'react'
import './style.css'

const Books = ({ image, name, price, stock, date, author, genre, handelCartChange }) => {
    

    const getDate = (date) =>{
     const day = date.split("/");
     return `${day[2]}-${day[1]}-${day[0]}`;
    }

    return (
        <div className="card">
            <div className="image">
                <img src={image} alt="" />
            </div>
            <div className="cntnt">
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Stock: {stock}</p>
                <p>Published Date: {getDate(date)}</p>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
                <button className="addToCart" onClick={ handelCartChange}>Add to cart</button>
            </div>
        </div>

    )
}

export default Books;
