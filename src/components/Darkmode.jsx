import Moon from '../assets/moon.svg'
import Sun from '../assets/sun.svg'
import styled from 'styled-components'
import {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

export const ToggleImage = styled.img`
    width: 20px;
    transition: 0.3s;
    cursor: pointer;
    margin: 8px 0 0 12px;
`

const Darkmode = (props) => {
    const [mode, setMode] = useState("")
    
    function setDarkMode() {
        setMode("dark")
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem('selectedTheme', 'dark')
    }

    function setLightMode() {
        setMode("light")
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem('selectedTheme', 'light')
    }

    const selectedTheme = localStorage.getItem('selectedTheme')

    useEffect(() => {
      selectedTheme === "dark" && setDarkMode()
    }, [selectedTheme])
    

  return (
    <>
        {
            mode === "dark" ?
                <div onClick={setLightMode}>
                    {
                        props.showImage &&
                            <ToggleImage src={Sun} srcSet='' alt='sun' />
                    }
                </div>
            :
                <div onClick={setDarkMode}>
                    {
                        props.showImage &&
                            <ToggleImage src={Moon} srcSet='' alt='moon' />
                    }
                </div>
        }
    </>
  )
}

Darkmode.propTypes = {
    showImage: PropTypes.bool.isRequired
}

export default Darkmode