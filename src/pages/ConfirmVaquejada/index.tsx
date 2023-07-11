import { Button } from '../../components/Button'
import { Confirm } from './styles'
import vaqueiro from '../../assets/vaqueiro.svg'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/Container'

export function ConfirmCreateVaquejada() {
  return (
    <Container>
      <Confirm>
        <img src={vaqueiro} alt="" />
        <h1>Bora criar uma nova vaquejada! </h1>
        <Link to={'/user/createVaquejada'}>
          <Button typeButton="submit">Iapois</Button>
        </Link>
      </Confirm>
    </Container>
  )
}
