import styled from 'styled-components';

export const Container = styled.div`
    width : 100%;
    height : 100%;
    display : flex;
    justify-content : center;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h1`
    font-size : 50px;
    text-align: center;
`

export const Todos = styled.div`
    display: flex;
    justify-content : center;
    flex-wrap: wrap;
    width: 100%;
    padding: 5px;
    margin-top : 40px;
`

export const AddTodoButton  = styled.button`
    width: 100px;
    height: 40px;
    background-color: red;
    color: white;
    margin: 5px;
`

export const EmptyTask = styled(Title)`
    font-size : 30px;
    width : 100%;
`