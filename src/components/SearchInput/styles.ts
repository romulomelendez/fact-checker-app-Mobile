import styled from "styled-components/native"

type InputSizeProps = {
    inputSize: number
}

export const Input = styled.TextInput `

    padding: 10px;
    background-color: white;
    color: gray;
    border-radius: 50px;
    border: 2px solid #3498DB;
    max-height: 50px;
    height: 100%;
    max-width: 300px;

    ${({ inputSize }: InputSizeProps) => ` width: ${inputSize}%; `}

`