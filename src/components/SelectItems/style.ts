
import styled from "styled-components";


export const SelectLabel = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: solid 1px var(--background);
  color: var(--text);

  span{
    position: absolute;
    margin-top:0.7rem;
    margin-left:1rem;
}

  select{
    width:98%;
    height:95%;
    background: none;
    padding-left: 4.5rem;
    padding-bottom:5px;
    font-weight:bold;

    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`

export const Select = styled.select`
    border: solid 1px var(--background);
    height: 40px;
    padding: 0 1rem;
    border-radius: 2px;
    width: 100%;

    box-shadow: 0 0 0 0;
    outline: 0;
`
