import { Link } from 'react-router-dom'
import { ButtonGroup, Main } from './styles'

export function TabelaVaqueiro() {
  return (
    <Main>
      <h1>Lista de Vaqueiros</h1>
      <ButtonGroup>
        <Link to={'/user/confirmCreateVaquejada'}>
          <button>Engendrar novas vaquejadas</button>
        </Link>
        <Link to={'/user/listVaquejada'}>
          <button>Tomar de conta das vaquejadas</button>
        </Link>
      </ButtonGroup>
    </Main>
  )
}
