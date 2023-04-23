import { AppLogo } from './styles'

const img = '../../../assets/logo.png'

export const Logo: React.FC = () => <AppLogo source={require(img)} alt="logo" />