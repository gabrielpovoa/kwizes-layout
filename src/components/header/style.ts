import styled from 'styled-components';
import { lighten } from 'polished'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color:  #333;
    padding: 3rem 5%;

    @media screen and (max-width: 500px){
        padding: 2rem;
    }
`;

export const Menu = styled.div`
`;

export const Logo = styled.div`
    background-color: #555;
    width: 5rem; height: 5rem;
    border-radius: 50%;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: ${lighten(0.2, '#333')}
    }
`;

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    cursor: pointer;

   
`;

export const Item = styled.div`
    padding: 2rem;
    border-top: .2rem solid transparent;
    &:hover {
        background-color: ${lighten(0.2, '#333')};
        border-top: .2rem solid #fff;

    }
    @media screen and (max-width: 500px){
        display: none;
    }
`;

export const Profile = styled.div`
    background-color: #555;
    width: 5rem; height: 5rem;
    border-radius: 50%;
    font-size: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
