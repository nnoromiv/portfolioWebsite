import { Header } from "./Portfolio"
import { IntroText, GreetingCase, IntroTextSpan } from "./Hero"
import Socials from "../Socials"
import { styled } from "styled-components"
import { Nav } from "react-bootstrap"
import { NAV_LINKS } from "../Export"

const Body = styled.div`
    padding: 40px;
    background-color: var(--inverted-hero-bg-color);
    border-radius: 30px;
    height: fit-content;

    @media screen and (max-width: 769px){
        padding: 40px 20px;
    }
`

const P = styled.p`
    font-weight: 500;
    color: var(--black-text-color);
    width: 500px;

    @media screen and (max-width: 769px){
        font-weight: 400;
    }

    @media screen and (max-width: 426px){
        width: 300px
    }
`

const MiddleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;

    @media screen and (max-width: 769px){
        display: grid;
        grid-template-rows: repeat(auto-fill, minmax(300px, 1fr)) !important;
        padding: 10px;
        gap: 20px;
    }

    @media screen and (max-width: 500px){
        grid-template-rows: repeat(auto-fill, minmax(280px, 1fr)) !important;
    }
`

const MiddleContainerBottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 50px;

    @media screen and (max-width: 321px){
        flex-direction: column
    }
`

const CopyRight = styled.p`
    display: flex;
    justify-content: center;
    margin: 10px 0 0 0
    font-weight: 500;
    color: var(--black-text-color);
`

const Footer = () => {
  return (
    <Body style={{ marginTop: '90px', borderRadius: '30px 30px 0 0', paddingBottom: '5px'}}>
        <Header style={{ margin: '0 0 20px 0'}}>
            <IntroText style={{ display: 'block', textAlign: 'left', color: 'var(--black-text-color)'}}>Lets Connect There </IntroText>
            <GreetingCase style={{ margin: '0', height: 'fit-content', color: 'var(--inverted-text-color)', backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)'}}>Connect</GreetingCase>
        </Header>
        <hr style={{color: 'var(--black-text-color)' }}/>
        <MiddleContainer>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div style={{ display: 'flex'}}>
               <IntroText style={{ color: 'var(--black-text-color)'}}>IV<IntroTextSpan>.</IntroTextSpan></IntroText>
            </div>
            <P>
                Thank you for visiting my portfolio. I am passionate about creating meaningful and innovative solutions. Let&apos;s connect and collaborate to turn ideas into reality. Feel free to reach out for opportunities, questions, or just to say hello. Your feedback is always welcome! 🚀✨
            </P>
            <Socials />
        </div>
        <MiddleContainerBottom>
           
            <div>
                <IntroTextSpan style={{ fontWeight: '800'}}>Contact</IntroTextSpan>
                <ol>
                    <li style={{ color: 'var(--black-text-color)'}}>+234 708 357 3870</li>
                    <li><a href="www.nnorom.netlify.app/contact">Contact Us</a></li>
                    <li><a href="mailto:nnorom.prince44@gmail.com"> Email</a></li>
                </ol>
            </div>

            <div>
                <IntroTextSpan style={{ fontWeight: '800'}} >Links</IntroTextSpan>
                {
                    NAV_LINKS.map((nav, index) => {
                        return(
                            <Nav.Item key={index} style={{margin: '10px 0 10px 0', }}>
                                <Nav.Link href={nav.link} style={{color: 'var(--black-text-color)'}}>
                                    {nav.name}
                                </Nav.Link>
                            </Nav.Item>
                        )
                    })
                }
            </div>
        </MiddleContainerBottom>
        
        </MiddleContainer>
        <hr style={{color: 'var(--black-text-color)', marginTop: '20px' }}/>
        <CopyRight>
            Copyright © 2023 IV. All Rights Reserved
        </CopyRight>
    </Body>
  )
}

export default Footer