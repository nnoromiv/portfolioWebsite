import { styled } from "styled-components"
import IMAGE from '../../assets/me.png'
import { GreetingCase, IntroTextSpan, IntroText, Text } from  './Hero'

const Body = styled.div`
    padding: 40px;
    background-color: var(--inverted-hero-bg-color);
    border-radius: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media screen and (max-width: 1025px){
        gap: 10px;
        flex-direction: column;
    }

    @media screen and (max-width: 769px){
        padding: 40px 20px;
    }
`

const ImageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
`

const MyImage = styled.img`
    object-fit: contain;
    width: 500px;
    height: 500px;
    background-color: var(--primary-color);
    border-radius: 100%;

    @media screen and (max-width: 769px){
        border-radius: 70% 20% 60% 10%;
    }

    @media screen and (max-width: 426px){
        border-radius: 30% 80% 40% 20%;
        width: 400px;
        height: 400px;
    }

    @media screen and (max-width: 376px){
        width: 320px;
    }

    @media screen and (max-width: 321px){
        width: 300px;
    }
`

const TextContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 1025px){
        width: 100%;
        text-align: left;
    }
`

const Hiring = () => {
  return (
    <Body>
        <ImageContainer>
            <MyImage src={IMAGE} srcSet="" alt="Me" />
        </ImageContainer>
        <TextContainer>
            <IntroText style={{ display: 'block', textAlign: 'left'}}>Why You Would<IntroTextSpan> Hire Me</IntroTextSpan> For Your Next Projects?</IntroText>
            <Text style={{ display: 'block', margin: '10px 0 20px 0', width: '100%' }}>
                There&apos;s so much language to use for one project and I have all the languages <br />
                Java • JavaScript • TypeScript • Python • Dart • TailWindCSS • SCSS • ReactJS • NextJS • MaterialUI • Redux • Firebase • MySQL • NodeJS • Android • NPM
            </Text>
            <GreetingCase style={{ margin: '0', color: 'var(--primary-color)', borderColor: 'var(--primary-color)' }}>Hire Me</GreetingCase>
        </TextContainer>
    </Body>
  )
}

export default Hiring