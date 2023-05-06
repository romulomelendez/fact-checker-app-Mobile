import { useContext } from 'react'
import { Text, View } from 'react-native'

import { Logo } from '../../components/Logo'
import { SearchInput } from '../../components/SearchInput'
import { Card } from '../../components/Card'
import { CheckNewsButton } from '../../components/CheckNewsButton'
import { SearchBar } from '../../components/SearchBar'

import { SearchContext } from '../../contexts/SearchContext'

import { NewsList } from './styles'

export const Searcher: React.FC = () => {

  const { news } = useContext(SearchContext)

  return (
    <>
      {
        news.length != 0
          ? 
            <>   
              <SearchBar />
              <NewsList
                data={ news }
                renderItem={ ({ item }) => <Card report={ item } /> }
                extraData={ (item: any) => item.originalNews.originalTitle }
                contentContainerStyle={{ rowGap: 10 }}
              />
            </>
          : 
            <>
              <Logo />
              <SearchInput size={100} />
              <CheckNewsButton size={100} origin='Home' />
            </>
      }
    </>
  )
}