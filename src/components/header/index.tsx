import React from 'react'
import { Navigation } from '../NavLanguages'
import { Container, Menu, Logo, Nav, Item, Profile } from './style'

export const Header = () => {
    return (
        <Container>
            <Nav>
                <Logo>🔥</Logo>
                <Item>Lessons</Item>
                <Item>Tutors</Item>
                <Item>Community</Item>
            </Nav>
            <Menu>
            </Menu>
            <Profile>🐓</Profile>
        </Container>
    )
}
