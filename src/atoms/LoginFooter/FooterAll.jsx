import React from 'react'
import { Footer } from '../../components/Login/Login.styled'
import FooterUl from './FooterUl'
import FooterSpan from './FooterSpan'
import FooterImg from './FooterImg'

const FooterAll = () => {
    return (
        <Footer>
            <FooterImg />
            <FooterUl />
            <FooterSpan />
        </Footer>
    )
}

export default FooterAll
