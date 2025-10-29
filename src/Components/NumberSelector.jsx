import { useState } from "react";
import styled from "styled-components";

function NumberSelector({ selectedNumber, setSelectedNumber,error }) {


    const arrNumber =[1,2,3,4,5,6];
   

    console.log(selectedNumber);

    return(
        <NumberSelectorContainer>
            <p style={{ color: "red" }}>{error}</p>

            <div className="flex">
            {arrNumber.map((value,i)=>
            (<Box
            isSelected ={value=== selectedNumber}
            key={i} onClick={()=>setSelectedNumber(value)}>{value}</Box>))}
            </div>
            <p>Select Number</p>
        
        </NumberSelectorContainer>
    );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`

    display:flex;
    flex-direction:column;
    align-items:end;

   .flex{
     display:flex;
    gap:30px;
   }
   p{
    font-size:24px;
    font-weight:700;
    margin-top:10px;
   }
`;

const Box = styled.div`

    height:72px;
    width:72px;
    border:2px solid black;
    display:grid;
    place-content:center;
    font-size:30px;
    font-weight:500;
    cursor: pointer;
    background-color:${(props)=>(props.isSelected?"black":"white")};
    color:${(props)=>(props.isSelected?"white":"black")};
`;