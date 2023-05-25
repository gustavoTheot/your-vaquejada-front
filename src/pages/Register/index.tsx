import { api } from '../../lib/axios'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Main, RegisterContainer } from './styles'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'

const newManageValidadeSchema = z.object({
  name: z.string(),
  phone: z.string().transform((str) => parseInt(str)),
  cpf: z.string().max(11),
  email: z.string().email(),
  password: z.string().min(6),
})

type NewManagerFormInputs = z.infer<typeof newManageValidadeSchema>

export function RegisterManager() {
  const { register, handleSubmit, reset } = useForm<NewManagerFormInputs>({
    resolver: zodResolver(newManageValidadeSchema),
    defaultValues: {
      name: undefined,
      cpf: '',
      email: '',
      password: '',
    },
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
      alert('ok')
    } catch (error) {
      // tratar erros de forma correta
    }

    reset()
  }

  return (
    <RegisterContainer>
      <Header />

      <Main>
        <h1>Cadastre-se grátis e crie sua vaquejada</h1>

        <form onSubmit={handleSubmit(handleCreateManager)}>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register('name')}
          />
          <input
            type="string"
            id="phone"
            placeholder="Phone"
            {...register('phone')}
          />

          <input type="email" placeholder="E-mail" {...register('email')} />
          <input
            type="password"
            placeholder="Password"
            {...register('password')}
          />
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
