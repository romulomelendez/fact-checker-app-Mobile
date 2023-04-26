import { Linking, Text, View } from 'react-native'

import { NewsProps } from '../../contexts/SearchContext'

// import { CardContainer, CardHeader, CardTitle, CardContent, Link } from './styles'

type CardProps = {
    report: NewsProps,
}

export const Card = ({ report }: CardProps) => {

    console.log(report.originalNews.originalTitle)

    return (

        <View>
            <View>
                <Text onPress={ () => Linking.openURL(report.newsReview[0].urlNews) }>
                    { report.originalNews.originalTitle }
                </Text>
            </View>
            <View>
                <Text>Date: { report.originalNews.originalClaimDate }</Text>
                <Text>Rating: { report.newsReview[0].textualRating }</Text>
                <Text>Lang: { report.newsReview[0].languageCode }</Text>
            </View>                        
        </View>
        
    )
}