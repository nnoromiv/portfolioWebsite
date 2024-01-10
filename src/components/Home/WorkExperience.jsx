import { styled } from 'styled-components'
import LINE from '../../assets/line.svg'
import TypeWriting from '../TypeWriting'
import { IntroText, MarginedBody } from './Hero'

const Body = styled.div`
    height: 100% !important;
    padding: 20px 0;
`

const ContainerLarge = styled.div`
    display: flex;

    @media screen and (max-width: 769px){
        display: none
    }
`

const ContainerMedium = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 769px){
        display: none
    }
`
const Company = styled.div`
    margin: 6% 0 0 0;
    width: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1025px){
        width: 40%
    }

    @media screen and (max-width: 769px){
        margin: 10% 0 0 0;
        width: fit-content;
    }

    @media screen and (max-width: 426px){
        margin: 15px 20px;
    }
`

const H2 = styled.h2`
    font-size: 30px;

    @media screen and (max-width: 769px){
        font-size: 20px !important;
    }

    @media screen and (max-width: 426px){
        color: var(--primary-color);
        font-size: 24px !important;
    }
`

const P = styled.p`
    font-weight: 500;

    @media screen and (max-width: 769px){
        font-weight: 400;
    }
`

const WorkExp = styled.div`
    margin: 6% 0 0 0;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1025px){
        width: 60%
    }
`

const MyImage =  styled.img`
    width: fit-content;
    object-fit: contain;

    @media screen and (max-width: 769px){
        width: 20%;
    }

    @media screen and (max-width: 426px){
        display: none;
    }
`


const MiddleLine = () => {
    return (
        <MyImage src={LINE} srcSet="" alt="Divider" />    
    )
}

const TypewriterStrings = [' Experience', ' Adventure']

const WorkExperience = () => {
  return (
    <MarginedBody id='resume'>
        <Body>
        <IntroText>My Work&nbsp;<TypeWriting ArrayOfStrings={TypewriterStrings} /></IntroText> 
        <ContainerLarge>
        <Company>
            <div>
                <H2>RedTechLimited, Victoria, Island</H2>
                <P> May 2021-2024 </P>
            </div>
            <div>
                <H2>Tony Elumelu Foundation, Lagos</H2>
                <P> Sept. 2022 - Oct. 2023 </P>
            </div>
            <div>
                <H2>IV, Lagos</H2>
                <P> July 2010-2024 </P>
            </div>
        </Company>
        <MiddleLine />
        <WorkExp>
            <div>
                <H2>Software Developer - DevOps</H2>
                <P> Sharepoint Framework website creation </P>
                <P> Deployed Github Repositories for JENKINS job </P>
            </div>
            <div>
                <H2>Operations</H2>
                <P> Built an Internal Search system to speed data findings</P>
                <P> Evaluated and Re-Evaluated more than 2000 candidates for the program</P>                
            </div>
            <div>
                <H2>CEO, Cryptocurrency Company</H2>
                <P> Software Developer </P>
            </div>
        </WorkExp>
        </ContainerLarge>

        <ContainerMedium>
        <MiddleLine />
        <Company>
            <div>
                <H2>RedTechLimited, Victoria, Island</H2>
                <P> May 2021-2024 </P>
            </div>
            <div>
                <H2>Software Developer - DevOps</H2>
                <P> Sharepoint Framework website creation </P>
                <P> Deployed Github Repositories for JENKINS job </P>
            </div>
            <div>
                <H2>Tony Elumelu Foundation, Lagos</H2>
                <P> Sept. 2022 - Oct. 2023 </P>
            </div>
            <div>
                <H2>Operations</H2>
                <P> Built an Internal Search system to speed data findings</P>
                <P> Evaluated and Re-Evaluated more than 2000 candidates for the program</P>                
            </div>
            <div>
                <H2>IV, Lagos</H2>
                <P> July 2010-2024 </P>
            </div>
            <div>
                <H2>CEO, Cryptocurrency Company</H2>
                <P> Software Developer </P>
            </div>     

        </Company>
        </ContainerMedium>
        </Body>
    </MarginedBody>
  )
}

export default WorkExperience