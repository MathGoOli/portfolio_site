import styled from "styled-components";


export const AboutSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: space-between;
    background-color: var(--color-grey-1);
    color: var(--color-grey-4);
    padding-top: 1rem;
    gap: 2rem;

    .about-div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }


    img{
        width: 3em;
        border-radius: 50%;
    }
`;