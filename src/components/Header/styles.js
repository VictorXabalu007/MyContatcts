import styled from 'styled-components';

export const HeaderContainer = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
        margin-top: 66px;
        width: 201px;
    }

    input {
        width: 100%;
        margin-top: 55px;
        border-radius: 25px;
        background-color: #fff;
        height: 50px;
        border: 0;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

        padding: 0 16px;

        &::placeholder {
            color: #BCBCBC;
        }
    }

`;
