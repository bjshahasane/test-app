// import React from 'react'

// const TestFunction = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default TestFunction

import React, { useState, useEffect } from "react";
import axios from 'axios'

const TestFunction = () => {

    const [dataList, setDatalist] = useState([]);
    const [inputText, setInputText] = useState("")

    useEffect(() => {
        showRating()
    }, [])

    const showRating = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products/')
            let data = response.data;
          
            setDatalist(data);
            console.log(dataList);
            // console.log("this sis data", data);
        }catch(error){
            console.log("Thsi is error",error);
        }
       

    }

    

    return (
        <div>
            <input type="text" onChange={(e) => setInputText(e.target.value)} name="inputText" value={inputText} />
            <ul>
                {
                    dataList.length > 0 && dataList.filter((item)=>item.rating.rate > 4).map((item) => (
                        <li key={item.id}>{item.title} {item.rating.rate} </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TestFunction;
