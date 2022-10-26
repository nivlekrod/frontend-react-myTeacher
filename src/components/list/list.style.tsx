import { styled } from '@mui/material';

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing(10, 2, 10, 2)};

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({theme}) => theme.spacing(9)};

    ${({theme}) => theme.breakpoints.down('md')} { // ajustamento para "medium device"
        grid-template-columns: 1fr;
        ${({theme}) => theme.spacing(8)}
    };
`;

export const ListEmpty = styled('h2')`
    text-align: center;
    padding: ${({theme}) => theme.spacing(20, 0)};
`;

export const ItemList = styled('li')`
    list-style: none;
`;

export const Photo = styled('img')`
    width: 100%;
`;

export const Infomations = styled('div')`
    word-break: break-word;
`;

export const Name = styled('h3')`
    margin: ${({theme}) => theme.spacing(2, 0, 0, 0)};
`;

export const Value = styled('p')`
    margin: 0;
    font-weight: bold;
    color: ${({theme}) => theme.palette.primary.main};
`;

export const Description = styled('p')`
    
`;
