import styled from 'styled-components/native'

type CardContainerColorProps = {
    status: string
}

export const CardContainer = styled.View `

    min-height: 160px;
    height: 177px;
    max-width: 280px;
    padding: 8px;
    border-radius: 10px;

    ${({ status }: CardContainerColorProps) => status === 'Verdadeiro'
        ? `
            background-color: #3498DB;
            border-width: 2px;
            border-color: #21618C;
            border-style: solid;
            color: #21618C; 
        `
        :
            status === 'Verdadeiro, mas...' 
            ? `
                background-color: #d67427;
                border-width: 2px;
                border-color: #78451e;
                border-style: solid;
                color: #78451e;   
            ` : `
                background-color: #c94b42;
                border-width: 2px;
                border-color: #6e2924;
                border-style: solid;
                color: #6e2924; 
            `
    }
    
`

export const CardHeader = styled.View ``

export const TitleLink = styled.Text `
    color: white;
    font-size: 14px;
    font-weight: 900;
`

export const NewsDate = styled.Text `
    color: #f7f7f7;
    opacity: 0.75;
    font-size: 10px;
    font-weight: 800;
`
export const NewsRating = styled(NewsDate)``
export const NewsLanguage = styled(NewsRating)``

export const CardContent = styled.View `

    flex: 1;
    justify-content: center;

`