import styled from 'styled-components';
import { lighten, darken } from 'polished'

export const Container = styled.div`
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    
    @media screen and (max-width: 840px){
        gap: 0;
    }
`;

export const Hero = styled.div`
    background-color: ${lighten(0.2, '#333')};
    padding: 2rem;
    border-radius: .4rem;
    max-width: 80rem;
    width: 70rem;
    height: fit-content;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    margin: 4rem 5%;

    @media screen and (max-width: 840px){
        width: 50rem;

    }
    @media screen and (max-width: 500px){
        width: 35rem;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-bottom: 5rem;
`

export const Photo = styled.div`
    height: 5rem; width: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 5rem;
    margin-bottom: 2rem;
`

export const Languages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

export const Language = styled.div`
    background-color: ${darken(0.2, '#779')};
    border-bottom: .2rem solid #779;
    margin-right: 2rem;
    text-align: center;
    height: 3rem;
    line-height: 3rem;
    margin-bottom: 2rem;
    border-radius: .5rem;
    font-size: 2rem;
`
