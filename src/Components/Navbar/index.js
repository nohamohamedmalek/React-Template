import React from 'react';
// import { Link } from 'react-router-dom'
import { NavbarSection , Logo , LogoText , ULList , ListItem , Anchor , StyledLink} from './style.js'


const Navbar  = () => {
    return(
      <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          <ULList>
              <ListItem><StyledLink to="/">Home</StyledLink></ListItem>
              <ListItem><Anchor>Work</Anchor></ListItem>
              <ListItem><Anchor>Portfolio</Anchor></ListItem>
              <ListItem><Anchor>Resume</Anchor></ListItem>
              <ListItem><Anchor>About</Anchor></ListItem>
              <ListItem><StyledLink to="/Contact">Contact</StyledLink></ListItem>
          </ULList>

          
          
      </div>
      
  </NavbarSection>
    )
  
}

export default Navbar;
