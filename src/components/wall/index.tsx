import React from 'react'
import { WallAside } from '../wallAside'
import { Container, Hero, ProfileInfo, Photo, Languages, Language } from './style'

export const WallHeader = () => {
    return (
        <Container>
            <Hero>
                <ProfileInfo>
                <Photo>🐓</Photo>
                <h2>Gabriel</h2>
                <p>Native Language: English</p>
                </ProfileInfo>

                <Languages>
                    <Language>🟥 </Language>
                    <Language>🟧 </Language>
                    <Language>🟨 </Language>
                    <Language>🟩 </Language>
                    <Language>🟦 </Language>
                    <Language>🟪 </Language>
                </Languages>
            </Hero>
            <WallAside />
        </Container>
    )
}
