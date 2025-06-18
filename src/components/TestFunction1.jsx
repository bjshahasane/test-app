import React, { useState } from 'react'
import axios from 'axios';

const TextFunction1 = () => {

  const [tableData, setTableData] = useState([]);

  const buttonClick = async () => {
    try {
      const randomNum = Math.floor(Math.random() * 10);;
      const response = await axios.get(`https://www.swapi.tech/api/people/${randomNum}`);
      const data = response.data.support;
      const temp = [...tableData];
      temp.push(data);
      setTableData(temp);

      console.log("This is data", data);
    } catch (err) {
      console.log("This is error", err)
    }

  }

  const handleDelete = (ItemIndex) => {
    const temp =  tableData.filter((_, index) => ItemIndex !== index);
    console.log("This is temp",temp);
    setTableData(temp);
  }
  console.log("=====",tableData);

  return (
    <div>
      <button type="button" onClick={buttonClick}>Generate</button>

      <table>
        <thead>
          <tr>
            <th>CONTACT</th>
            <th>DONATE</th>
            <th>PARTNER DISCOUNTS</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>

          {
            tableData && tableData.map((item, index) => (
              <tr key={index}>
                <td>{item.contact}</td>
                <td>{item.donate}</td>
                <td>{item.partnerDiscount?.heartMath?.link}</td>
                <td><button type="button" onClick={() => handleDelete(index)}>Delete</button></td>
              </tr>
            ))
          }

        </tbody>
      </table>

    </div>
  )
}

export default TextFunction1;
