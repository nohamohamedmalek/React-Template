import React from 'react';
import { MediaSection , Social , Icon , SocialDesc , Span , SpanInfo  } from './style.js'
import axios from 'axios'


class SocialMedia extends React.Component {
  state = {
    social : []
  }
  componentDidMount(){
    axios.get('./js/data.json').then (res => {this.setState({social : res.data.social })
  })
  }
  render () {
    const {social} = this.state

    const socialList = social.map((socialItem) => {
        return (
          <Social key={socialItem.id} item={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
         <SocialDesc>
              <Span>{socialItem.title}</Span>
              <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
      </Social>
        )        
     })
            
    return(
      
      <MediaSection>
            {socialList}
      </MediaSection>
    )
  }
   
  
}

export default SocialMedia;
