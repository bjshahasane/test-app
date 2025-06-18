import React, { useState } from 'react';



const InputSubmit = () => {

    const [textInp, setTextInp] = useState("");
    const [dataList, setDataList] = useState([]);

    const handleClick = () => {
        const listItem = { id: Date.now(), text: textInp }
        const temp = [...dataList]
        temp.push(listItem);
        setDataList(temp);
        setTextInp("");
    }

    const handleDelete =(id)=>{
        const temp = [...dataList];
        const index = temp.findIndex(item => item.id === id);
        if(index !== -1){
            temp.splice(index,1);
            setDataList(temp);
        }
    }


    return (
        <div>

            <input
                type='text'
                id="textInp"
                name="textInp"
                value={textInp}
                onChange={(e) => setTextInp(e.target.value)} />

            <button type='button' onClick={handleClick} >Submit</button>

            {
                dataList.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Text</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                dataList.map((id, text) => (
                                    <tr>
                                        <td>{id}</td>
                                        <td>{text}</td>
                                        <td><button type='button' onClick={()=>handleDelete(id)}></button></td>
                                    </tr>

                                ))
                            }


                        </tbody>
                    </table>
                )
            }

        </div>
    )
}

export default InputSubmit
