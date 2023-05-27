import { ButtonsUserPage, HomeContainer, MainHome } from './styles'

import { Link } from 'react-router-dom'

export function Home() {
  return (
    <HomeContainer>
      <MainHome>
        <div>
          <h1>
            Gerencia sua vaquejada. Crie senhas, anote o placar e acesse seu
            histórico.
          </h1>
        </div>

        <ButtonsUserPage>
          <button>
            <Link to={'/register'}>Crie sua conta</Link>
          </button>

          <button>
            <Link to={'/login'}>Entre em sua conta</Link>
          </button>
        </ButtonsUserPage>
      </MainHome>
    </HomeContainer>
  )
}
