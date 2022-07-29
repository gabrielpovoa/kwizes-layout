import styled from 'styled-components';
import { lighten, darken } from 'polished'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 2rem;
    margin: 4rem 5%;
    height: auto;
    max-height: 100vh;
    background-color: ${lighten(0.2, '#333')};
    border-radius: .5rem;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

    width: auto;
    max-width: 100%;

    @media screen and (max-width: 500px){
        width: 35rem;
    }

`;

export const Hero = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    & img {
        max-width: 4rem;
        width: 100%;
        margin-right: 2rem;
        object-fit: cover;
    }

`;

export const LanguageArea = styled.div`
    display: flex;
    align-items: center; 
    padding: .8rem;
    background-color: ${darken(0.2, '#779')};
    border-bottom: .2rem solid #779;
    border-radius: .5rem;
    margin-bottom: 3rem;

    &:hover {
        background-color: ${darken(0.2, '#7799')};
    }
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Score = styled.div`
    padding-block: 2rem;
`;

export const Social = styled.div`
    display: flex;
    gap:2rem;
    padding: 2rem;
    margin-bottom: 2rem;
    border-radius: .4rem;
    border-bottom: .2rem solid transparent;

    &:hover {
        background-color: ${darken(0.2, '#7799')};
        border-bottom: .2rem solid ${darken(0.2, '#fff')};
    }
`;

export const SocialItem = styled.div`
    font-weight: bold;
    font-size: 2rem;
    color: #FFF;
`;

export const PreviousChallenge = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 2rem;
    gap: 5rem;

    @media screen and (max-width: 500px){
        gap: 2rem;
    }
`;

export const Challenge = styled.img`
    height: 12vh;
    border-radius: .5rem;
    cursor: pointer;
    object-fit: cover;

    @media screen and (max-width: 500px){
        height: 8vh;
    }

`;

export const Boxcontainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;

export const Title = styled.div`
    color: #000;
    font-weight: bold;
`;

export const Box = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 2rem;
    width: 40rem;
    max-width: 100%;
    padding: .8rem;
    background-color: ${darken(0.2, '#779')};
    border-bottom: .2rem solid #779;
    border-radius: .5rem;

    @media screen and (max-width: 500px){
        width: 35;
    }

`;

export const ChallegeSmall = styled.img`
    height: 4vh;
    border-radius: .5rem;
    margin-right: 2rem;

    

`;

export const Rank = styled.div`
    margin-right: 5rem;
    display: flex;
    flex-direction: column;

`;

export const Creation = styled.div`
`;
