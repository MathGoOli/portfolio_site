import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
    	--color-color-primary: rgba(98,60,234,1);
    	--color-color-primary-50: rgba(49,30,117,1);
    	--color-color-secondary: rgba(80,207,154,1);
    	--color-color-secondary-50: rgba(229,248,240,1);
    	--color-color-tertiary: rgba(255,87,127,1);
    	--color-color-tertiary-50: rgba(248,229,243,1);
    	--color-color-quaternary: rgba(80,108,207,1);
    	--color-color-quaternary-50: rgba(229,233,248,1);
    	--color-grey-0: rgba(10,10,11,1);
    	--color-grey-1: rgba(18,18,20,1);
    	--color-grey-2: rgba(134,142,150,1);
    	--color-grey-3: rgba(233,236,239,1);
    	--color-grey-4: rgba(248,249,250,1);
    	--color-social-media-instagram: rgba(207,80,172,1);
    	--color-social-media-linkedin: rgba(14,118,168,1);
    	--color-social-media-facebook: rgba(80,108,207,1);
    }
    .text-style-title-1 {
    	font-size: 38px;
    	font-family: IBM Plex Sans;
    	font-weight: 700;
    	font-style: normal;
    	line-height: 125%;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-title-2 {
    	font-size: 28px;
    	font-family: IBM Plex Sans;
    	font-weight: 700;
    	font-style: normal;
    	line-height: 40px;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-title-3 {
    	font-size: 22px;
    	font-family: IBM Plex Sans;
    	font-weight: 700;
    	font-style: normal;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-title-4 {
    	font-size: 18px;
    	font-family: IBM Plex Sans;
    	font-weight: 700;
    	font-style: normal;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-headline {
    	font-size: 16px;
    	font-family: Inter;
    	font-weight: 400;
    	font-style: normal;
    	line-height: 28px;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-body {
    	font-size: 14px;
    	font-family: Inter;
    	font-weight: 400;
    	font-style: normal;
    	line-height: 150%;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-body-500 {
    	font-size: 14px;
    	font-family: Inter;
    	font-weight: 500;
    	font-style: normal;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-caption {
    	font-size: 12px;
    	font-family: Inter;
    	font-weight: 400;
    	font-style: normal;
    	line-height: 150%;
    	text-decoration: none;
    	text-transform: none;
    }
    .text-style-headline-500 {
    	font-size: 16px;
    	font-family: Inter;
    	font-weight: 500;
    	font-style: normal;
    	line-height: 28px;
    	text-decoration: none;
    	text-transform: none;
    }


    body{
        background-color: var(--color-grey-0);
    }

    .max-width-div{
        max-width: 2000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }
`;

export default GlobalStyle;