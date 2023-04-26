import styled from 'styled-components/native'

type CssProps = {
    variant: string
}

export const CardContainer = styled.View `

    flex: 3;
    /* row-gap: 10px; */
    height: 22px;
    max-width: 230px;
    padding: 2px;
    border-radius: 10px;

    ${({ variant }: CssProps) => variant === 'Verdadeiro'
        ? `
            background-color: #3498DB;
            border-width: 2px;
            border-color: #21618C;
            border-style: solid;
            color: #21618C; 
        `
        :
            variant === 'Verdadeiro, mas...' 
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

export const CardHeader = styled.View `
    
    padding: 10px;

    Text {

        text-decoration: none;
        /* :hover {
            color: white;
            text-decoration: underline;
        } */
    }

`

export const Link = styled.Text ` font-size: 9px; `

export const CardTitle = styled.Text ` color: #fff; `

export const CardContent = styled.Text `

    /* display: grid;
    grid-template-columns: auto auto; */
    justify-content: space-between;
    font-size: 13px;

`