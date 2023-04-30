import styled from "styled-components/native"

type InputSizeProps = {

    inputHeight: number,
    inputWidth: number
}

export const Input = styled.TextInput `

    padding: 10px;
    background-color: white;
    color: gray;
    border-radius: 50px;
    border: 2px solid #3498DB;
    max-height: 50px;
    max-width: 300px;

    ${({ inputHeight, inputWidth }: InputSizeProps) => `
    
        height: ${inputHeight}%;
        width: ${inputWidth}%;

    `}

`