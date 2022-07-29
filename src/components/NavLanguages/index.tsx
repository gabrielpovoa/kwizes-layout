import React from 'react'
import { Container, Flag, Language, Hero } from './style'

import Englishflag from '../../images/EN.svg'
import Franceflag from '../../images/FR.svg'
import Germanflag from '../../images/GR.svg'
import Russiaflag from '../../images/RU.svg'
import Arabicflag from '../../images/AR.svg'

export const Navigation = () => {
    const langCoutries = [
        { flag: Englishflag, lang: 'English' },
        { flag: Franceflag, lang: 'French' },
        { flag: Germanflag, lang: 'Russian' },
        { flag: Russiaflag, lang: 'Germany' },
        { flag: Arabicflag, lang: 'Arabic' },
    ]

    return <>
        <Container>
            <Hero>
                {langCoutries.map((item, index) => (
                    <>
                        <Language>{item.lang}</Language>
                    </>
                ))}
            </Hero>
        </Container>
    </>
}
