import styled from 'styled-components';

export const ContactsListContainer = styled.section`
    width: 100%;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
`;

export const HeaderList = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        font-weight: 700;
        padding: 11px 14px;
        background: transparent;
        border-radius: 4px;
        border: 2px solid ${({ theme }) => theme.colors.primary.main};
        color: ${({ theme }) => theme.colors.primary.main};
        text-decoration: none;

        transition: all 0.2s ease-in;

        &:hover {
            background: ${({ theme }) => theme.colors.primary.main};
            color: #fff;
        }
    }
`;

export const CardListContainer = styled.section`
    margin-top: 8px;

    header {
        margin-bottom: 8px;

        button {
            display: flex;
            gap: 8px;
            align-items: center;
            background: transparent;
            border: 0;

            span {
                font-weight: 700;
                font-size: 16px;
                color: ${({ theme }) => theme.colors.primary.main};
            }
        }
    }
`;
