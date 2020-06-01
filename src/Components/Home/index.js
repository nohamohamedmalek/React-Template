import React from 'react';
import { HomeSection , HomeInformation , HomeTitle , HomeInfo , HomeDesc , Span , HomeButton} from './style.js'



const Home  = () => {
    return(
         <HomeSection>
            <div className="container">
                <HomeInformation>
                    <HomeTitle>Noha Malek</HomeTitle>
                    <HomeInfo>Creative Director</HomeInfo>
                    <HomeDesc>
                        Iam a professional <Span>Front-End Developer</Span> creating modern and responsive designs to Web 
                        . Let us work together. Thank you. 
                    </HomeDesc>
                    <HomeButton>Let's Begin</HomeButton>
                </HomeInformation>
            </div>
         </HomeSection>
    )
}
export default Home;