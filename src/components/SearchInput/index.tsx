import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { Input } from './styles'

type SearchInputprops = {
    size: number
}

export const SearchInput: React.FC<SearchInputprops> = ({ size }: SearchInputprops) => {

    const { search, setSearch } = useContext(SearchContext)

    return (

        <Input
            placeholder="Search"
            onChangeText={ searchText => setSearch(searchText) }
            defaultValue={ search }
            inputSize={ size }
        />   
  
    )
    
}