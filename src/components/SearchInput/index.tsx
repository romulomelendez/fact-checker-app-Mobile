import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { Input } from './styles'

export const SearchInput: React.FC = () => {

    const { search, setSearch } = useContext(SearchContext)

    return (

        <Input
            placeholder="Search"
            onChangeText={ searchText => setSearch(searchText) }
            defaultValue={ search }
        />   
  
    )
    
}