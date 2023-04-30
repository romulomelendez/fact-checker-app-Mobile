import { useContext } from 'react'
import { Text } from 'react-native'

import { AntDesign } from '@expo/vector-icons'

import { SearchContext } from '../../contexts/SearchContext'

import { Check } from './styles'

type CheckNewsBtnProps = {
    size: number,
    origin?: string
}

export const CheckNewsButton: React.FC<CheckNewsBtnProps> = ({ size, origin }: CheckNewsBtnProps) => {
    
    const { fetchNewsOnBackend } = useContext(SearchContext)
    
    return (

        <Check btnSize={size} onPress={ fetchNewsOnBackend }>
            {
                origin === 'Home' &&
                    <Text style={{ color: '#fff', fontSize: 15, fontWeight: '700'}}>
                        CHECK
                    </Text>
            }
            <AntDesign name="search1" size={24} color="white" />
        </Check>
    )

}