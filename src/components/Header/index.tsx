import { Header } from "./styles";


const HeaderComponent = () => {

    return(
        <Header>
            <h1 className="text-style-headline">MathGoOli</h1>
            <nav>
                <a href="">Home</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
            </nav>
        </Header>
    )
};

export default HeaderComponent;