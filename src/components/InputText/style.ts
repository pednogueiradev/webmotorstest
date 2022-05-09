import styled from "styled-components"
import locationIcon from '../../assets/icons/location.svg'

export const InputStyled = styled.div`
  border: solid 1px var(--background);
  height: 40px;
  width: 100%;
  border-radius: 5px;
  color: var(--text);
  
span{
    position: absolute;
    margin-top:0.7rem;
    margin-left:2.5rem;
}

input{
    width: 100%;
    height:100%;
    border: none;
    background: none;
    padding-left: 5.2rem;
    padding-bottom:5px;
    font-weight:bold;

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}


&:after{
    content: "";
    background: url(${locationIcon});
    position: absolute;
    background-size:contain;
    width: 20px;
    height: 20px;
    margin-top: -38px;
    margin-left: 10px;
}
`

export const AutoComplete = styled.div`

    top: 14.2em;
    position: absolute;
    background: white;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 18px -10px #000000;
    *{
        align-items: center;
        display:flex;
        height: 40px;
        margin: 0;
        padding: 1rem;
        border-bottom: solid 1px var(--background);
        transition:0.2s;
        &:hover{
            cursor: pointer;
            background: var(--text);
            color: white;
        }
        &:last-child{
            border-bottom: none;
        }
    }
`