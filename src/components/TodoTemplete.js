import react from "react";
import styled from "styled-components";

const TodoTemplateBlock=styled.div`
width:512px;
height: 768px;
position:relative;
backGround:white;
border-radius:16px;
box-shadow:0 0 8px rgba(0,0,0,0.04);
margin:0 auto;
margin-top:96px;
margin-bottom: 32px;
display:flex;
flex-direction: column;

`

function TodoTemplete({children}){
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplete
