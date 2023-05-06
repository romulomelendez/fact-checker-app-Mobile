import { Text, Linking } from 'react-native'

import { ArticleProps } from '../../screens/HotNewsTab'

import { HNContainer, HNHeader, HNTitle, HNSubtitle, HNBody, HNButton, HNPublishDate } from './styles'

type HotCardProps = {
    article: ArticleProps
}

export const HotCard = ({ article }: HotCardProps) =>

    <HNContainer>
        <HNHeader>
            <HNTitle>{ article.title }</HNTitle>
            <HNSubtitle>Author: { article.author }</HNSubtitle>
        </HNHeader>
        <HNBody>
            <HNPublishDate>Pusblish At: { article.publishedAt }</HNPublishDate>
            <HNButton onPress={ () => Linking.openURL(article.topNewsUrl) }>
                <Text>Click to check this article</Text>
            </HNButton>
        </HNBody>
    </HNContainer>
