import { styled } from "styled-components"
import { GreetingCase, IntroText, IntroTextSpan, MarginedBody } from "./Hero"
import IMG_1 from '../../assets/Thumbnail.png'
import IMG_2 from '../../assets/Thumbnail1.png'
import { Badge, Carousel, Stack } from "react-bootstrap"
import {useState} from 'react'

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 10px;
`

const IMAGE = styled.img`
    object-fit: cover;
    width: 100%;
    height: 500px;
    border-radius: 22px;
`

const Chips = styled.div`
    margin: 15px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

const H2 = styled.h2`
    font-size: 30px;

    @media screen and (max-width: 769px){
        font-size: 20px !important;
    }

    @media screen and (max-width: 426px){
        font-size: 24px !important;
    }
`

const P = styled.p`
    font-weight: 500;

    @media screen and (max-width: 769px){
        font-weight: 400;
    }
`

const Container = styled.div`
    margin: 15px 10px 0 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
`

const CAROUSEL_INFORMATION = [
    {
        index: 0,
        image: IMG_1,
        badge: ['UI/UX', 'Landing Page', 'Website'],
        projectName: 'Food Express',
        projectCaption: 'Food Delivery Solution',
        p: 'Food App is begin made Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam veniam quibusdam perspiciatis reprehenderit cupiditate nisi alias'
    },
    {
        index: 1,
        image: IMG_2,
        badge: ['Publish', 'Portfolio', 'Website'],
        projectName: 'Jumbo Express',
        projectCaption: 'Jumbo Delivery Solution',
        p: 'Jumbo App is begin done Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam veniam quibusdam perspiciatis reprehenderit cupiditate nisi alias'
    }

]

const Portfolio = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
    <MarginedBody id="project">
        <Header>
            <IntroText style={{ display: 'block', textAlign: 'left'}}>Dive Into My <IntroTextSpan>Portfolio</IntroTextSpan> </IntroText>
            <GreetingCase style={{ margin: '0', height: 'fit-content', color: 'var(--inverted-text-color)', backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)'}}>More</GreetingCase>
        </Header>
        
        <Carousel fade activeIndex={index} onSelect={handleSelect}>
            {
                CAROUSEL_INFORMATION.map(carousel => {
                    return(
                        <Carousel.Item key={carousel.index}>
                            <IMAGE src={carousel.image} srcSet="" alt="" />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
        <Chips>
            <Stack direction="horizontal" gap="2">
                {
                    CAROUSEL_INFORMATION.map(carousel => (
                        index === carousel.index &&                           
                            carousel.badge.map((badge, key) => (
                                <Badge key={key} pill bg="secondary">{badge}</Badge>
                            ))             
                ))}
            </Stack>
        </Chips>
            {
                CAROUSEL_INFORMATION.map((carousel,key) => (
                    index === carousel.index &&
                    <Container key={key}>
                        <H2>{carousel.projectName} - <IntroTextSpan> {carousel.projectCaption}</IntroTextSpan></H2>
                        <P>{carousel.p}</P>
                    </Container>
                ))
            }
    </MarginedBody>
  )
}

export default Portfolio