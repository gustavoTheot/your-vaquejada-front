import {
  ButtonsUserPage,
  Header,
  HomeContainer,
  ListHome,
  MainHome,
} from './styles'

import logo from '../../assets/logo.svg'

export function Home() {
  return (
    <HomeContainer>
      <Header>
        <div>
          <img src={logo} alt="" />
        </div>

        <ListHome>
          <ul>
            <li>Inicio</li>
            <li>Sobre</li>
            <li>Contato</li>
            <li>Entrar</li>
            <li>Cadaste-se</li>
          </ul>
        </ListHome>
      </Header>

      <MainHome>
        <div>
          <h1>
            Gerencia sua vaquejada. <br /> Crie senhas, anote o placar e acesse
            seu histórico.
          </h1>
        </div>

        <ButtonsUserPage>
          <button>
            <a href="#">Crie sua conta</a>
          </button>

          <button>
            <a href="#">Entre em sua conta</a>
          </button>
        </ButtonsUserPage>
      </MainHome>
    </HomeContainer>
  )
}
