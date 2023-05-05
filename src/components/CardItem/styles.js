import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 100%;
    padding: 16px;
    background: #fff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 16px;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 4px;

    .info {
        .conatct-name {
            display: flex;
            align-items: center;
            gap: 8px;

            margin-bottom: 4px;

            span {
                background: ${({ theme }) => theme.colors.primary.lighter};
                color: ${({ theme }) => theme.colors.primary.main};
                font-weight: bold;
                padding: 4px;
                border-radius: 4px;
            }
        }

        span {
            display: block;
            font-size: 14px;
            color: ${({ theme }) => theme.colors.gray[200]};
        }
    }

    .actions {
        display: flex;
        align-items: center;
        gap: 10px;

        button {
            background: transparent;
            border: 0;
        }
    }
`;
