import { api } from '../../lib/axios'
import * as z from 'zod'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Main, RegisterContainer, ViewInput } from './styles'
import { Button } from '../../components/Button'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Eye, EyeSlash } from 'phosphor-react'

const newManageValidadeSchema = z.object({
  name: z.string(),
  phone: z.string().transform((str) => parseInt(str)),
  cpf: z.string().max(11),
  email: z.string().email(),
  password: z.string().min(6),
})

type NewManagerFormInputs = z.infer<typeof newManageValidadeSchema>

export function RegisterManager() {
  const { register, handleSubmit, reset, control } =
    useForm<NewManagerFormInputs>({
      resolver: zodResolver(newManageValidadeSchema),
      defaultValues: {
        name: '',
        cpf: '',
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

  async function handleCreateManager(data: NewManagerFormInputs) {
    const { name, phone, cpf, email, password } = data

    try {
      await api.post('/manager', {
        name,
        phone,
        cpf,
        password,
        email,
      })

      history('/login')
    } catch (error) {
      alert(error)
    }

    console.log(data)
    reset()
  }

  function toggleShowPassword() {
    setShowPassword(!showPassword)
  }

  return (
    <RegisterContainer>
      <Main>
        <h1>Cadastre-se grátis e crie sua vaquejada</h1>

        <form onSubmit={handleSubmit(handleCreateManager)}>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            {...register('name')}
          />
          <input
            type="string"
            id="phone"
            placeholder="Telefone/Celular"
            {...register('phone')}
          />

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

          <input type="text" placeholder="CPF" {...register('cpf')} />
          <Button typeButton="submit">Cadastrar</Button>
        </form>

        <span>
          Já tem uma conta? <Link to={'/login'}>Faça login</Link>
        </span>
      </Main>
    </RegisterContainer>
  )
}
