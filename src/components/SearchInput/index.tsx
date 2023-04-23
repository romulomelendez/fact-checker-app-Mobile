import { useState } from 'react'

// import { SearchContext } from '../../contexts/SearchContext'

import { Input } from './styles'

export const SearchInput: React.FC = () => {

    // const { search, setSearch, fetchNewsOnBackend } = useContext(SearchContext)
    const [ search, setSearch ] = useState('')
    return (

        <Input
            placeholder="Search"
            onChangeText={ text => setSearch(text) }
            value={ search }
        />   
  
    )
    
}