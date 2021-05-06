// import {useState} from 'react';
// import AddShopping from './AddShopping';
// import Shopping from './Shopping';

// const Basket = () => {
//     const [item, setItem] = useState("");
//     const [items, setItems] = useState([]);

//     //search the basket
//     const [search, setSearch] = useState("");
//     const checkName = ( { name } ) => name.toLowerCase().startsWith(search.trim().toLowerCase()); 
//     //const filteredShopping = shopping.filter(checkName);


//     const newItem = ({target}) => {
//         setItem(target.value)
//     }

//     const submitForm = (event) => {
//         // Prevent form submission
//          event.preventDefault();
//     }
 
//      const handleAdd = () => { 
//          // Save player name  state to array 
//          setItems(items => [...items, item]);
//      }

//      const handleRemove = () => {
//         setItems(items.slice().filter((i) => i !== item));
//      }

//      const handleQuantityIncrease = () => {
//         const newItem = [...items];
    
        
    
//         setItems(newItem);
//     };


//      return(
//          <>
//             <AddShopping submitHandler={submitForm}
//             newItem={newItem} handleAdd={handleAdd} handleRemove={handleRemove} />

//             {/* <label>Search: </label> 
//             <input placeholder="enter search here" value={search} onInput={e => setSearch(e.target.value)}/> */}

//             <Shopping items={items}/>


//          </>
//      )
// }

// export default Basket;