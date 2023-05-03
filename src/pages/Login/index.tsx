import { FormEvent, useState } from 'react'
import { api } from '../../lib/axios'
import { useNavigate } from 'react-router-dom'

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
    <div>
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

        <button type="submit">Logar</button>
      </form>

      <link rel="stylesheet" href={'/register'} />
    </div>
  )
}
