// import './App.css';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// function App() {

//   const [searchVal, setSearchVal] = useState("");
//   const [listData, setListData] = useState([]);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       if (searchVal) {
//         onSearch();
//       }
//     }, 500); // debounce delay 500ms

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [searchVal]);

//   const onSearch = async () => {
//     try {
//       const response = await axios.get(`https://dummyjson.com/users/search?q=${searchVal}`)
//       const data = response.data.users;
//       console.log("this is data", data);
//       setListData(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <div className="App container mt-4">
//       <div className="max-w-md mx-auto">
//         <input
//           className="form-control"
//           onChange={(e) => setSearchVal(e.target.value)}
//           type="text"
//           name="searchField"
//           value={searchVal}
//           placeholder="Search users..."
//         />
//         <ul className="list-group mt-4">
//           {searchVal && listData && listData.length > 0 && listData.map((item) => (
//             <li key={item.id} className="list-group-item">
//               {item.firstName} {item.lastName}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [array, setArray] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [removeIndex, setRemoveIndex] = useState('');

//   const handlePush = () => {
//     if (inputValue.trim() !== '') {
//       setArray(prev => [...prev, inputValue]);
//       setInputValue('');
//     }
//   };

//   const handleRemove = () => {
//     const index = parseInt(removeIndex);
//     if (!isNaN(index) && index >= 0 && index < array.length) {
//       const newArray = [...array];
//       newArray.splice(index, 1); // remove 1 item at the given index
//       setArray(newArray);
//       setRemoveIndex('');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h2>Manage Array</h2>

//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Value to push"
//       />
//       <button onClick={handlePush} style={{ marginLeft: '10px' }}>Push</button>

//       <br /><br />

//       <input
//         type="number"
//         value={removeIndex}
//         onChange={(e) => setRemoveIndex(e.target.value)}
//         placeholder="Index to remove"
//       />
//       <button onClick={handleRemove} style={{ marginLeft: '10px' }}>Remove</button>

//       <h3>Current Array:</h3>
//       <ul>
//         {array.map((item, idx) => (
//           <li key={idx}>{idx}: {item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
