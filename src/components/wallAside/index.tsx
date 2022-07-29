import React from 'react'
import { Container, Hero, LanguageArea, Main, Score, Social, SocialItem, PreviousChallenge, Challenge, Boxcontainer, Title, Box, ChallegeSmall, Rank, Creation } from './style'
import Franceflag from '../../images/FR.svg'
import AprilChallenge from './img/april.png'
import MayChallenge from './img/may.png'
import JuneChallenge from './img/june.png'

export const WallAside = () => {
  return (
    <Container>
      <Hero>
        <LanguageArea>
          <img src={Franceflag} alt="France Flag" />
          <p>French - (1646 know words)</p>
        </LanguageArea>
      </Hero>

      <Main>
        <Score>Activity Score: 5</Score>
        <Social>
          <SocialItem>FB</SocialItem>
          <SocialItem>TT</SocialItem>
          <SocialItem>IG</SocialItem>
        </Social>
        <PreviousChallenge>
          <Challenge src={AprilChallenge} />
          <Challenge src={MayChallenge} />
          <Challenge src={JuneChallenge} />
        </PreviousChallenge>
      </Main>
      <hr/>

      <Boxcontainer>
        <Title>Active Challenge</Title>

        <Box>
          <ChallegeSmall src={JuneChallenge}/>
          <Rank>
            63
            Rank
          </Rank>
          <Creation>
            0
            Kwizes
          </Creation>
        </Box>
      </Boxcontainer>
    </Container>
  )
}
