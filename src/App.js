import React, { useState, useEffect } from 'react';
import Books from './components/Books';
import Cart from './components/Cart'
import BookList from './data/data.json';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [data , setData] = useState([]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();

    // setQuery(search);
    // setSearch('');
  }

  useEffect(()=>{
    setData([...BookList]);

  },[])

  const handelCartChange= (pdata,id) => {
    console.log(pdata.stock)
    const updateData = [];
    // data.map((myData) => {
    //   data.filter(fdata)
    // })
    // const StokeCount = data['id']
    // setData()
  }


  return (
    <div className="App">
      <div className="header">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <Cart cartItems={cartItems}/>
      </div>

      <div className="row">
      {data && data.map((postDetail) => (
        <Books
          key={postDetail.id}
          image={postDetail.image}
          name={postDetail['name ']}
          price={postDetail.price}
          stock={postDetail.stock}
          date={postDetail.published_date}
          author={postDetail.author}
          genre={postDetail.genre}
          handelCartChange={() => handelCartChange(postDetail)}
        />
      ))}
      </div>
      

    </div>

  );

}
export default App;
