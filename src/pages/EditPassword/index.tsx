import {
  DataProfile,
  Field,
  FieldValue,
  ProfileContainer,
} from '../Profile/styles'
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { Button } from '../../components/Button'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { hash } from 'bcryptjs'

interface Manager {
  id: string
  password: string
}

const updateManagerValidadeSchema = z.object({
  oldPassword: z.string(),
  newPassword: z.string(),
  repeatNewPassword: z.string(),
})

type UpdateManagerFormInputs = z.infer<typeof updateManagerValidadeSchema>

export function EditPassword() {
  const { register, handleSubmit, setValue } = useForm<UpdateManagerFormInputs>(
    {
      resolver: zodResolver(updateManagerValidadeSchema),
    },
  )

  const [profile, setProfile] = useState<Manager>()
  const tokenManager = localStorage.getItem('token')

  async function handleUpadeManager(data: UpdateManagerFormInputs) {
    const { oldPassword, newPassword, repeatNewPassword } = data

    try {
      const passwordHash = await hash(oldPassword, 6)

      if (passwordHash !== profile?.password) {
        console.log('Response', Error)
      }

      if (newPassword !== repeatNewPassword) {
        console.log('Response', Error)
      }

      await api.put(`/manager/${profile?.id}`, {
        password: newPassword,
      })
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
      } catch (error) {
        console.log('Erro', error)
      }
    }

    if (tokenManager) {
      fetchProfile()
    }
  }, [tokenManager, setValue])

  return (
    <ProfileContainer>
      <DataProfile>
        <form onSubmit={handleSubmit(handleUpadeManager)}>
          <Field>
            <FieldValue>
              <label>
                <strong>Senha antiga</strong>
              </label>

              <input type="password" {...register('oldPassword')} />
            </FieldValue>
          </Field>

          <Field>
            <FieldValue>
              <label>
                <strong>Nova senha</strong>
              </label>

              <input type="password" {...register('newPassword')} />
            </FieldValue>
          </Field>

          <Field>
            <FieldValue>
              <label>
                <strong>Repita a nova senha</strong>
              </label>

              <input type="password" {...register('repeatNewPassword')} />
            </FieldValue>
          </Field>

          <Button typeButton={'submit'}>Saltar nova senha</Button>
        </form>
      </DataProfile>
    </ProfileContainer>
  )
}
