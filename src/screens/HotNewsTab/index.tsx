import { useEffect, useState } from 'react'

import { ScrollView, Text } from 'react-native'

import { HotCard } from '../../components/HotCard'

export type ArticleProps = {
    author: string,
    title: string,
    topNewsUrl: string,
    publishedAt: string
}

export const HotNewsTab: React.FC = () => {
    
    useEffect(() => {
      
        const fetchForHotNews = async () => {
    
            try {
    
                const response = await (await fetch('http://10.0.2.2:5000/hotnews')).json()
                console.log(response)
                setArticles(response)
    
            } catch (err: any) {
                console.error(err.message)
            }
            
        }
    
        fetchForHotNews()
      
    }, [])

    const [articles, setArticles] = useState<ArticleProps[]>([]) 

    return (

        <ScrollView>

            {

                articles.length != 0
                  && articles.map(( article: any, index: number) => <HotCard key={ index } article={ article } />)
            }

        </ScrollView>

    )

}