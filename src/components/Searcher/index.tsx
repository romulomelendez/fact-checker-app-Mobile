import { useContext } from 'react'
import { Text, FlatList } from 'react-native'

import { Logo } from '../../components/Logo'
import { SearchInput } from '../../components/SearchInput'
import { Card } from '../../components/Card'

import { SearchContext } from '../../contexts/SearchContext'

import { Check } from './styles'

export const Searcher: React.FC = () => {

    const { news, fetchNewsOnBackend } = useContext(SearchContext)

    return (
        <>
            {
                news.length != 0
                  ? 
                    <FlatList
                      data={ news }
                      renderItem={ ({ item }) => <Card report={ item } /> }
                      extraData={ (item: any) => item.originalNews.originalTitle }
                    />
                  : 
                    <>
                        <Logo />
                        <SearchInput />
                        <Check onPress={ fetchNewsOnBackend }>
                            <Text style={{ color: 'white' }}>
                                CHECK
                            </Text>
                        </Check>
                    </>
            }
        </>
    )

}