import { SearchInput } from '../SearchInput'
import { CheckNewsButton } from '../CheckNewsButton'

import { SearchBarContainer } from './styles'

export const SearchBar: React.FC = () => (

    <SearchBarContainer>
        <SearchInput height={100} width={85} />
        <CheckNewsButton size={20} />
    </SearchBarContainer>

)