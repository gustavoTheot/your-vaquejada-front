import { FormEvent, useState } from 'react'
import { api } from '../../lib/axios'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import { LoginContainer, Main } from './styles'
import { Button } from '../../components/Button'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useNavigate()

  async function handleLogin(event: FormEvent) {
    event.preventDefault()

    try {
      await api.post('/login', {
        email,
        password,
      })
      history('/home')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <LoginContainer>
      <Header />

      <Main>
        <h1>Entre e gerencie sua vaquejada</h1>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button typeButton="submit">Agora só imburar na conta</Button>
        </form>

        <span>
          Ainda não tem uma conta?
          <Link to={'/register'}> Faça seu cadastro</Link>
        </span>
      </Main>
    </LoginContainer>
  )
}
