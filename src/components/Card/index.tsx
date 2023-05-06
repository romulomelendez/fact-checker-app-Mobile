import { Linking } from 'react-native'

import { NewsProps } from '../../contexts/SearchContext'

import { CardContainer, CardHeader, NewsDate, NewsRating, NewsLanguage, CardContent, TitleLink } from './styles'

type CardProps = {
    report: NewsProps | any,
}

export const Card = ({ report }: CardProps) => {

    return (

        <CardContainer status={report.newsReview[0].textualRating}>
            <CardHeader>
                <TitleLink onPress={ () => Linking.openURL(report.newsReview[0].urlNews) }>
                    { report.originalNews.originalTitle }
                </TitleLink>
            </CardHeader>
            <CardContent>
                <NewsDate>Date: { report.originalNews.originalClaimDate }</NewsDate>
                <NewsRating>Rating: { report.newsReview[0].textualRating }</NewsRating>
                <NewsLanguage>Lang: { report.newsReview[0].languageCode }</NewsLanguage>
            </CardContent>                        
        </CardContainer>
        
    )
}