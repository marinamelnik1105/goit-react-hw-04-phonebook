import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body{
background-color:#ebebef;
color:#5256d3;
font-size:20px;}
ul{
list-style: none;
padding-left: 0;
}
button{
width:150px;
border-radius: 10px;
border: #2a30df 1px solid;
background-color:#a8a9db;
padding: 5px;
:hover{
background-color:#2a30df;
color:#fff;
border: }
}`;
