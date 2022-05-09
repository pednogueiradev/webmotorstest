import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #605f5f14;
        --gold: #B8860B;
        --red: #f3123c;
        --text: #686976;
        --link: rgb(243, 18, 60)
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text);
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif; 
        -moz-osx-font-smoothing: grayscale;
        font-size: 100%;
    }

    button{
        cursor: pointer;
        padding: 0.6rem 1rem;
        margin: 8px 0;
        border-radius: 3px;
        transition:  0.2s;
        &:hover{
            opacity: 0.8;
        }

        @media only screen and (max-width: 993px){
        width: 100%;
        margin:1rem 0;
    }
    }
`;

export const Container = styled.div`
	padding: 1rem;
	max-width: 933px;
	margin: 0 auto;

`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    
    &.right{
        justify-content:right;
    }
    &.alignCenter{
        align-items:center;
    }

    &.flex-3{
        flex:30%;
    }

    @media only screen and (max-width: 993px){
    display: block;
}
`

export const RowFlexStart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;

    @media only screen and (max-width: 993px){
    display: block;
}
` 
