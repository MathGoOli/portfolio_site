import HeaderComponent from "../../components/Header";
import { AboutSection } from "./styles";


const Home = () =>{

    return(
        <>
            <HeaderComponent/>
            <main>
            
            <AboutSection>
                <div className="max-width-div">
                        <div className="about-div">
                            <img src="https://media.licdn.com/dms/image/D4D03AQH5aUXWNCAn2A/profile-displayphoto-shrink_800_800/0/1675431317992?e=1722470400&v=beta&t=s9lBXRFxdqmcg0CMSe-kc2XHUMYDATOoYmz3Mh795po"/>
                            <h2 className="text-style-headline-500">Hello, My name is Matheus</h2> 
                        </div>
                        <h1 className="text-style-title-1">See what I could <span>contribute</span> with your company:</h1>
                    <p>Discover here in this environment, created specifically for you, all my projects and technologies.</p>
                
                </div>
            </AboutSection>
            
            </main>
        </>
    )
};

export default Home;