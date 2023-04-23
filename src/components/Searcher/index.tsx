// import { useContext } from 'react'

// import { SearchContext } from '../../contexts/SearchContext'
import { Text } from 'react-native'

import { Logo } from '../../components/Logo'
import { SearchInput } from '../../components/SearchInput'

import { Check } from './styles'

export const Searcher: React.FC = () => {

    // const { fetchNewsOnBackend } = useContext(SearchContext)

    return (
        <>
            <Logo />
            <SearchInput />
            <Check>
                <Text style={{ color: 'white' }}>
                    CHECK
                </Text>
            </Check>
        </>
    )

}