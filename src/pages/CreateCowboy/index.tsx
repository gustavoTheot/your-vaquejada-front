import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/axios'
import { Button } from '../../components/Button'
import { Main, Radio } from './styles'
import { Container } from '../../styles/Container'
import { useParams } from 'react-router-dom'

const createCowboyValidateSchema = z.object({
  password: z.string(),
  cowboy_name: z.string(),
  beats_treadmill: z.string(),
  horse: z.string(),
  horse_beats_treadmill: z.string(),
  boi_tv: z.boolean(),
})

type CowboyFormInput = z.infer<typeof createCowboyValidateSchema>

export function CreateCowboy() {
  const { register, handleSubmit, reset } = useForm<CowboyFormInput>({
    resolver: zodResolver(createCowboyValidateSchema),
    defaultValues: {
      password: '',
      cowboy_name: '',
      beats_treadmill: '',
      horse: '',
      horse_beats_treadmill: '',
      boi_tv: false,
    },
  })

  const token = localStorage.getItem('token')
  const { id } = useParams<{ id: string }>()

  async function submitCowboy(data: CowboyFormInput) {
    try {
      await api.post(`/vaquejada/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      alert('Vaqueiro cadastrado com sucesso!')
      reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Main>
        <h1>Cadastro de senha da Vaquejada</h1>

        <form onSubmit={handleSubmit(submitCowboy)}>
          <label>
            Incarque o dedo no que danado tu quer fazer na vaquejada
          </label>
          <input
            type="text"
            placeholder="Criar senha"
            id="senha"
            {...register('password')}
          />

          <input
            type="text"
            placeholder="Puxador"
            id="cowboy_name"
            {...register('cowboy_name')}
          />

          <input
            type="text"
            placeholder="Cavalo"
            id="horse"
            {...register('horse')}
          />

          <input
            type="text"
            placeholder="Bate esteira"
            id="beats_treadmill"
            {...register('beats_treadmill')}
          />

          <input
            type="text"
            placeholder="Cavalo bate esteira"
            id="horse_beats_treadmill"
            {...register('horse_beats_treadmill')}
          />

          <Radio>
            <span>Com Boi TV:</span>
            <div>
              <input
                type="radio"
                id="boi_tv_sim"
                value="true"
                {...register('boi_tv')}
              />
              <label htmlFor="boi_tv_sim">Sim</label>
              <input
                type="radio"
                id="boi_tv_nao"
                value="false"
                {...register('boi_tv')}
              />
              <label htmlFor="boi_tv_nao">Não</label>
            </div>
          </Radio>
          <Button typeButton="submit">Cadastrar senha</Button>
        </form>
      </Main>
    </Container>
  )
}
