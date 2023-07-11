import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { Button } from '../../components/Button'
import { Container } from '../../styles/Container'
import { Main } from './styles'

const createVaquejadaValidadeSchema = z.object({
  title: z.string(),
  local: z.string(),
  date: z.string(),
  time_start: z.string(),
  premium: z.string(),
  amount_teams: z.number().default(0),
})

type CreateVaquejadaFormInputs = z.infer<typeof createVaquejadaValidadeSchema>

export function CreateVaquejada() {
  const { register, handleSubmit, reset } = useForm<CreateVaquejadaFormInputs>({
    resolver: zodResolver(createVaquejadaValidadeSchema),
    defaultValues: {
      title: '',
      local: '',
      date: '',
      time_start: '',
      premium: '',
    },
  })

  const token = localStorage.getItem('token')

  async function handleCreateVaquejada(data: CreateVaquejadaFormInputs) {
    try {
      await api.post('/vaquejada', data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Main>
        <h1>Cadastrando vaquejada</h1>

        <form onSubmit={handleSubmit(handleCreateVaquejada)}>
          <label htmlFor="">
            Informe necessárias para criação da Vaquejada:
          </label>
          <input type="text" placeholder="Titulo" {...register('title')} />
          <input type="text" placeholder="Local" {...register('local')} />
          <input type="text" placeholder="Data" {...register('date')} />
          <input
            type="text"
            placeholder="Horário"
            {...register('time_start')}
          />
          <input type="text" placeholder="Premio" {...register('premium')} />

          <Button typeButton="submit">Cadastrar</Button>
        </form>
      </Main>
    </Container>
  )
}
