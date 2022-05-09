import styled from "styled-components";


export const StyledButton = styled.button`
    border: solid 1px white;
    color: white;
    background: var(--red);
    border-radius: 3px;
    text-transform: uppercase;
    font-weight: bold;
    min-width: 220px;

    &.secondary{ 
        background: transparent;
        border: solid 1px var(--gold);
        color: var(--gold);
        text-transform: unset;
        min-width:120px;
    }
    &.link{
        text-transform: unset;
        background: transparent;
        color: var(--text);
        min-width: 0;
    }
`
