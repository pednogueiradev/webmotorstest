import styled from "styled-components";

import carIcon from '../../assets/icons/car.svg';

export const TabList = styled.ul`

    display: inline-flex; 
    list-style: none;

    li{
        text-transform: uppercase;
        font-size:0.6rem;
        width: 160px;
        display: flex;
        flex-direction: column;
        padding-left: 4rem;
        padding-right: 0.8rem;
        text-align: left;
        strong{
            color: var(--red);
            font-size:1.1rem;
        }
        &.active{
            border-bottom: solid 3px var(--red);
        }
        &.car{
            &:after{
                content:"";
                background:url(${carIcon});
                background-size: contain;
                position: absolute;
                width:30px;
                height:30px;
                margin-left: -3rem;
                margin-top: 0.5rem;
            }
        }
        &:hover{
            cursor: pointer;
        }
    }
`
export const Button = styled.button`
    border: solid 1px gold;
    color: gold;
    background: white;

`

export const FormSearch = styled.form`

    *{
        margin: 5px;
        box-sizing: border-box;
     }

    background: white;
    padding:1rem;

`

export const InputText = styled.input.attrs({ type: 'text' })`
    border: solid 1px var(--background);
    height: 40px;
    padding:1rem;
    border-radius: 5px;
    width: 100%;
 
	&:before{
		content:"###";
        position:absolute;
        background-color: black;
        z-index: 1000;
        width: 100%;
	}
 
`

