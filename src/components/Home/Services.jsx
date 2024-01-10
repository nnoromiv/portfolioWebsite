import { Badge, Card } from "react-bootstrap"
import { styled } from "styled-components"
import { IntroTextSpan } from './Hero'
import PropTypes from 'prop-types'
import THUMBNAIL from "../../assets/Thumbnail.png"
import THUMBNAIL2 from "../../assets/Thumbnail1.png"


export const Body = styled.div`
    padding: 40px;
    background-color: var(--hero-bg-color);
    border-radius: 30px;
    height: fit-content;

    @media screen and (max-width: 769px){
        padding: 40px 20px;
    }
`

const IntroText = styled.h1`
    font-size: 50px;
    color: white;
    width: 70%

    @media screen and (max-width: 500px){
        width: 100%
    }
`

const HeaderInformation = styled.div`
    display: flex;
    justify-content: space-between;    
    margin: 0 0 3% 0;

    @media screen and (max-width: 500px){
        flex-direction: column;
    }
`

const HeaderText = styled.h6`
    color: white;
    width: 30%;
    text-align: right;

    @media screen and (max-width: 500px){
        text-align: left;
        width: 100%
    }
`

const Cards = styled.div`
    width: 100%;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    place-items: center;
    gap: 3%;

    @media screen and (max-width: 769px){
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)) !important;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
    }
`

const DemoButton = styled.h1`
    position: absolute;
    border-radius: 50px;
    bottom: 0;
    right: 0;
    border: 20px solid var(--hero-bg-color);
    padding: 30px;
    color: white;
    text-align: center;
    background-color: #484848;
    margin: 0 -35px -24px 0;

    &:hover {
        transform: scale(120%);
    }

    @media screen and (max-width: 1025px){
        margin: 0 -35px 0 0;
    }

    @media screen and (max-width: 500px){
        margin: 0 -1px 0 0;
    }
`

const P = styled.p`
    font-weight: 500;

    @media screen and (max-width: 769px){
        font-weight: 400;
    }
`

const Dot = styled.div`
    width: 20px;
    height: 10px;
    background-color: var(--primary-color);
    border-radius: 30px
`

const CARD_INFORMATION = [
    {
        header: 'Web Development',
        image: THUMBNAIL,
        className: '',
        gridColumn: '1/2'
    },
    {
        header: 'Mobile Development',
        image: THUMBNAIL2,
        className: 'Orange',
        gridColumn: '2/3'
    }
]

export const LocalCard = props => {
    return(
        <Cards>
        {
            props.informationInArray.map(cardInfo => {
                return (
                    <Card key={cardInfo.header} className={cardInfo.className} style={{ gridColumn: cardInfo.gridColumn }}>
                        {
                            props.Show &&<Card.Header>{cardInfo.header}</Card.Header>
                        }
                        <Card.Body>
                            <Card.Img src={cardInfo.image} srcSet="" alt="" />
                        </Card.Body>
                        <Card.ImgOverlay>
                            <Badge pill variant="secondary" style={{ margin: '0'}}>{cardInfo.badge}</Badge>                            
                            <Card.Title>{cardInfo.title}</Card.Title>
                            {
                                !props.Show &&
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                                    <div>
                                        <Dot />
                                        <P style={{ color: 'var(--inverted-text-color)'}}>{cardInfo.author}</P>
                                    </div>
                                    <div>
                                        <Dot />
                                        <P style={{ color: 'var(--inverted-text-color)'}}>{cardInfo.date}</P>
                                    </div>
                                </div>
                            }
                        </Card.ImgOverlay>
                        <DemoButton className={cardInfo.className}></DemoButton>                            
                    </Card>       
                )
            })
        }        
        </Cards>
    )
}


LocalCard.propTypes = {
    informationInArray: PropTypes.array.isRequired,
    Show: PropTypes.bool.isRequired,
}

const Services = () => {
  return (
    <Body id="services">
        <HeaderInformation>
            <IntroText>My<IntroTextSpan> Services</IntroTextSpan></IntroText>
            <HeaderText>Java • JavaScript • TypeScript • Python • Dart • TailWindCSS • SCSS • ReactJS • NextJS • MaterialUI • Redux • Firebase • MySQL • NodeJS • Android • NPM</HeaderText>
        </HeaderInformation>
        <LocalCard informationInArray={CARD_INFORMATION} Show={true} />
    </Body>
  )
}

export default Services