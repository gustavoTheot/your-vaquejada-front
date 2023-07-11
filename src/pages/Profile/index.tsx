import { DataProfile, Field, FieldValue } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Button } from '../../components/Button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Container } from '../../styles/Container'

interface Manager {
  id: string
  name: string
  email: string
  phone: string
}

const updateManagerValidadeSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number(),
})

type UpdateManagerFormInputs = z.infer<typeof updateManagerValidadeSchema>

export function Profile() {
  const { register, handleSubmit, setValue } = useForm<UpdateManagerFormInputs>(
    {
      resolver: zodResolver(updateManagerValidadeSchema),
    },
  )

  const [profile, setProfile] = useState<Manager>()
  const tokenManager = localStorage.getItem('token')

  async function handleUpadeManager(data: UpdateManagerFormInputs) {
    try {
      await api.put(`/manager/${profile?.id}`, {
        name: data?.name,
        email: data?.email,
        phone: data?.phone,
      })
      console.log('ok')
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/profile', {
          headers: {
            Authorization: `Bearer ${tokenManager}`,
          },
        })

        setProfile(response.data.profile)

        setValue('name', response.data.profile.name)
        setValue('email', response.data.profile.email)
        setValue('phone', response.data.profile.phone)
      } catch (error) {
        console.log('Erro', error)
      }
    }

    if (tokenManager) {
      fetchProfile()
    }
  }, [tokenManager, setValue])

  return (
    <Container>
      <DataProfile>
        <form onSubmit={handleSubmit(handleUpadeManager)}>
          <Field>
            <FieldValue>
              <label>
                <strong>Nome</strong>
              </label>

              <input type="text" {...register('name')} />
            </FieldValue>
          </Field>

          <Field>
            <FieldValue>
              <label>
                <strong>E-mail</strong>
              </label>

              <input type="email" {...register('email')} />
            </FieldValue>
          </Field>

          <Field>
            <FieldValue>
              <label>
                <strong>Telefone ou Celular</strong>
              </label>

              <input type="number" {...register('phone')} />
            </FieldValue>
          </Field>

          <Button typeButton={'submit'}>Saltar perfil</Button>
        </form>
      </DataProfile>
    </Container>
  )
}
