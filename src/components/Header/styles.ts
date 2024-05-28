import styled from "styled-components";

export const Header = styled.header`
    width: 100vm;
    height: 5rem;
    color: var(--color-grey-4);
    background-color: var(--color-grey-0);
    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid var(--color-color-primary);

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    } 
    a{
        color: inherit;
        text-decoration: inherit;
        font-family: "Inter";
    }


`;