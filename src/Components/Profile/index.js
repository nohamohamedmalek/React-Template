import React from 'react';
import { ProfileSection , ProfileInfo , ProfileList , ProfileItem , Span , WebSpan , Skills , ProfileTitle , SkillsDesc , Bar , BarTitle , Barperc , Barparent  , TitleSpan , SkillsTitle , Perc , Perc1 , Perc2 } from'./style.js'

const Profile  = () => {
    return(
      <ProfileSection >
      <div className="container">
          <ProfileInfo>
              <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <Span>Name</Span>
                      Noha Malek
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Birthday</Span>
                      23/11/1997
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Address</Span>
                      Cairo
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Phone</Span>
                      4444 5555 6666
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Email</Span>
                      NohaMalek.com
                  </ProfileItem>
                  <ProfileItem>
                      <Span>Website</Span>
                      <WebSpan>www.google.com</WebSpan>
                  </ProfileItem>
              </ProfileList>
          </ProfileInfo>
          
          <Skills>
              <SkillsTitle>Some <TitleSpan>skills</TitleSpan></SkillsTitle>
              <SkillsDesc>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesc>
              <Bar>
                  <BarTitle>Bootstrap</BarTitle>
                  <Barperc>100%</Barperc>
                  <Barparent>
                   <Perc></Perc>
                  </Barparent>
              </Bar>
              
              <Bar>
                  <BarTitle>CSS3</BarTitle>
                  <Barperc>50%</Barperc>
                  <Barparent>
                  <Perc1></Perc1>
                  </Barparent>
              </Bar>
              
              <Bar>
                  <BarTitle>Photoshop</BarTitle>
                  <Barperc>80%</Barperc>
                  <Barparent>
                  <Perc2></Perc2>
                  </Barparent>
              </Bar>
          </Skills>
          
      </div>
  </ProfileSection >
  
    )
  
}

export default Profile;
