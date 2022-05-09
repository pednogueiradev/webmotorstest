
import styled from "styled-components";

export const Select = styled.select`
  
    height: 40px;
    border: solid 1px var(--background);
    padding: 0 1rem;
    border-radius: 2px;
    box-shadow: 0 0 0 0;
    outline: 0;

    @media only screen and (max-width: 993px){
        width: 100%;
    }

`

export const Options = styled.option`
    border-radius: 0px;
`
