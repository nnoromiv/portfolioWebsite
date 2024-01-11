import { styled } from 'styled-components'
import IMAGE from '../../assets/me_2.png'
import Arrow from '../../assets/arrow.svg'
import Socials from '../Socials'
import STAR from '../../assets/star.png'
import TypeWriting from '../TypeWriting'

export const MarginedBody = styled.div`
    margin: 0 40px;
    @media screen and (max-width: 769px){
        margin: 0;
    }
`

const Top = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: -2% 0 0 0;
`

const ArrowImage = styled.img`
    width: 50px;
    margin: 20px 0 0 0;
    transform: translate(-70px, 40px) rotate(30deg);
`
export const GreetingCase = styled.h1`
    text-align: center;
    margin: 20px 0 0 0;
    background-color: transparent;
    font-size: 20px;
    border: 1px solid black;
    padding: 5px 15px;
    border-radius: 30px;
    width: fit-content;
    cursor: pointer;
`

export const IntroText = styled.h1`
    margin: 1% 0 0 0;
    font-size: 70px;
    text-align: center;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 1025px){
        font-size: 60px;
    }

    @media screen and (max-width: 769px){
        font-size: 55px
    }

    @media screen and (max-width: 426px){
        font-size: 40px !important;
    }

     @media screen and (max-width: 378px){
        font-size: 30px !important;
    }
`

export const IntroTextSpan = styled.span`
    color: var(--primary-color);
`

const InformationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin: -5% 0 0 0;

    @media screen and (max-width: 769px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
    }
`

const Apostrophe = styled.strong`
    font-size: 300px;

    @media screen and (max-width: 1025px){
        font-size: 200px
    }

    @media screen and (max-width: 769px){
        display: none;
    }
`

export const Text = styled.h6`
    margin: -45% 0 5% 0;
    font-size: 14px;
    width: 500px;

    @media screen and (max-width: 1025px){
        margin: -30% 0 5% 0;
    }

    @media screen and (max-width: 769px){
        display: none;
    }
`

const ImageContainer = styled.div`
    margin: -3% 0 0 -30%;

    @media screen and (max-width: 1025px){
        margin: -6% 0 0 0;
    }

    @media screen and (max-width: 769px){
        margin: -8% 0 0 0
    }
`

const InnerCircle = styled.div`
    position: absolute;
    width: 500px;
    height: 500px;
    border: 1px solid var(--primary-color);
    margin: 20% 0 0 -4%;
    background-color: var(--primary-color);
    z-index: -1;
    border-radius: 100%;

    @media screen and (max-width: 1025px){
        margin: 35% 0 0 -5%
    }

    @media screen and (max-width: 769px){
        margin: 50% 0 0 -5%
    }

    @media screen and (max-width: 426px){
        width: 400px;
        height: 400px;
        margin: 50% 0 0 -17%;
    }

    @media screen and (max-width: 376px){
        width: 320px;
        margin: 60% 0 0 -7%;
    }

    @media screen and (max-width: 321px){
        width: 300px;
        margin: 60% 0 0 -8%;
    }
`
const MyImage = styled.img`
    object-fit: contain;
    width: 400px;
    margin: 80px 0 0 -10px;

    @media screen and (max-width: 769px){
        margin: 80px 0 0 0;
    }

    @media screen and (max-width: 426px){
        width: 250px
    }
`

const ExperienceContainer = styled.div`
    margin: 0 0 0 -10%;
    align-self: center;

    @media screen and (max-width: 1025px){
        align-self: flex-end;
    }

    @media screen and (max-width: 769px){
        display: none
    }
`

const EXPText = styled.h3`
    text-align: right;
    color: var(--primary-color);

    @media screen and (max-width: 1025px){
        display: none
    }
`

const TypewriterStrings = [ "Hi","I am", "Nnorom Christian", ]

const Hero = () => {
  return (
    <MarginedBody>
        <Top>
            <ArrowImage src={Arrow} srcSet="" alt="pointer" />
            <GreetingCase>Hello!</GreetingCase>
            <IntroText><IntroTextSpan><TypeWriting ArrayOfStrings={TypewriterStrings} /></IntroTextSpan></IntroText>
            <IntroText> Full Stack Engineer </IntroText>
        </Top>
        <InformationContainer>
            <div>
                <Apostrophe>&ldquo;</Apostrophe>
                <Text>Java • JavaScript • TypeScript • Python • Dart • TailWindCSS • SCSS • ReactJS • NextJS • MaterialUI • Redux • Firebase • MySQL • NodeJS • Android • NPM</Text>
                <Socials />
            </div>
            <ImageContainer>
                <InnerCircle />
                <MyImage src={IMAGE} srcSet="" alt="Me" />
            </ImageContainer>
            <ExperienceContainer>
                <div style={{ textAlign:"right" }}>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                    <img src={STAR} srcSet="" alt="star" width="30px"/>
                </div>
                <IntroText>7 Yrs</IntroText>
                <EXPText>Expertise</EXPText>
            </ExperienceContainer>
           
        </InformationContainer>
    </MarginedBody>
  )
}

export default Hero