import { styled } from 'styled-components'
import TWITTER from '../assets/twitterx-dark.svg'
import LINKEDIN from '../assets/linkedin-color.svg'
import GITHUB from '../assets/github-dark.svg'

const Body = styled.div`
    @media screen and (max-width: 769px){
        width: 100%;
        display: flex;
        justify-content: left;
        align-items: center;
    }
`


const LogoImage = styled.img`
    cursor: pointer;
    width: 60px !important;
    margin: 10px 5% 0 0;

    @media screen and (max-width: 769px){
        width: 40px !important;
    }
`

const Socials = () => {    
  return (
    <>
        <Body>
            <a href="https://twitter.com/nnoromiv" target="_blank" rel="noreferrer">
                <LogoImage src={TWITTER} srcSet="" alt="x" />
            </a>
            <a href="https://www.github.com/nnoromiv" target="_blank" rel="noreferrer">
                <LogoImage src={GITHUB} srcSet="" alt="x" />
            </a>
            <a href="https://www.linkedin.com/in/christian-nnorom-63b9a0159/" target="_blank" rel="noreferrer">
                <LogoImage src={LINKEDIN} srcSet="" alt="x" />
            </a>
        </Body>
        
    </>
    
  )
}

export default Socials