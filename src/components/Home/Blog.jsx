// import { styled } from "styled-components"
import { IntroText, GreetingCase } from "./Hero"
import THUMBNAIL from "../../assets/Thumbnail.png"
import THUMBNAIL2 from "../../assets/Thumbnail1.png"
import { Header } from "./Portfolio"
import { Body, LocalCard } from "./Services"

const BLOG_INFORMATION = [
    {
        header: 'UI/UX Design',
        image: THUMBNAIL,
        className: '',
        badge: 'UI/UX Design',
        title: 'Design Unraveled: Behind the scenes of UI/UX',
        author: 'Jerry Smith',
        date: '22 July 2023',
        gridColumn: '2/3'
    },
    {
        header: 'Web Design',
        image: THUMBNAIL2,
        className: 'Orange',
        badge: 'Website Design',
        title: 'The Beginning of Design: HTML',
        author: 'Jerry Smith',
        date: '22 July 2023',
        gridColumn: '3/4'
    }
]

const Blog = () => {
  return (
    <Body style={{ marginTop: '40px'}}>
        <Header style={{ margin: '0 0 20px 0'}}>
            <IntroText>Blog</IntroText>
            <GreetingCase style={{ margin: '0', height: 'fit-content', color: 'var(--inverted-text-color)', backgroundColor: 'var(--primary-color)', borderColor: 'var(--primary-color)'}}>More</GreetingCase>
        </Header>
        <LocalCard informationInArray={BLOG_INFORMATION} Show={false} />
    </Body>
  )
}

export default Blog