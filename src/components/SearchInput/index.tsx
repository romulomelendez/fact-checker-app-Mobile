import { useContext } from 'react'

import { SearchContext } from '../../contexts/SearchContext'

import { Input } from './styles'

type SearchInputprops = {
    height: number,
    width: number,
}

export const SearchInput: React.FC<SearchInputprops> = ({ height, width }: SearchInputprops) => {

    const { search, setSearch } = useContext(SearchContext)

    return (

        <Input
            placeholder="Search"
            onChangeText={ searchText => setSearch(searchText) }
            defaultValue={ search }
            inputHeight={ height }
            inputWidth={ width }
        />   
  
    )
    
}