import styled from 'styled-components/native'

type CheckNewsBtnProps = {
    btnSize: number
}

export const Check = styled.TouchableOpacity `

    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    border-radius: 50px;
    border: none;
    background-color: #3498DB;
    height: 50px;
    max-width: 200px;

    ${({ btnSize }: CheckNewsBtnProps) => `
    
        width: ${btnSize}%;

    `}

`