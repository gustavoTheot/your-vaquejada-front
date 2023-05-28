import { useState } from 'react'
import { api } from '../../lib/axios'
import { Link, useNavigate } from 'react-router-dom'
import { LoginContainer, Main } from './styles'
import { Button } from '../../components/Button'
import * as z from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ViewInput } from '../Register/styles'
import { Eye, EyeSlash } from 'phosphor-react'

const loginManagerValidadeSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})

type LoginManagerFormInputs = z.infer<typeof loginManagerValidadeSchema>

export function Login() {
  const { register, handleSubmit, control } = useForm<LoginManagerFormInputs>({
    resolver: zodResolver(loginManagerValidadeSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const history = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const passwordValue = useWatch({
    control,
    name: 'password',
    defaultValue: '',
  })

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  async function handleLogin(data: LoginManagerFormInputs) {
    const { email, password } = data

    try {
      const response = await api.post('/login', {
        email,
        password,
      })
      const { token } = response.data
      localStorage.setItem('token', token)

      history('/user/profile')
    } catch (error) {
      alert(error)
    }
  }

  return (
    <LoginContainer>
      <Main>
        <h1>Entre e gerencie sua vaquejada</h1>

        <form onSubmit={handleSubmit(handleLogin)}>
          <input type="email" placeholder="E-mail" {...register('email')} />
          <ViewInput>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Senha"
              value={passwordValue}
              {...register('password')}
            />
            <button type="button" onClick={toggleShowPassword}>
              {showPassword ? <Eye size={24} /> : <EyeSlash size={24} />}
            </button>
          </ViewInput>

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
