import styled from 'styled-components';

export const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items : center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size : 50px;
    text-align: center;
`

export const Todos = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 10px;
    width: 95%;
    background-color: red;
`