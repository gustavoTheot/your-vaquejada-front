import { useEffect, useState } from 'react'
import { Main, Table, TableContainer } from './styles'
import { api } from '../../lib/axios'
import { Plus } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

interface VaquejadaProps {
  id: string
  title: string
  local: string
  date_create: string
  time_start: string
  premium: string
}

export function GetVaquejada() {
  const [vaquejadas, setVaquejadas] = useState<VaquejadaProps[]>([])
  const navigate = useNavigate()

  function handleRowClick(id: string) {
    navigate(`/user/listCowboy/${id}`)
  }

  const token = localStorage.getItem('token')

  function handleDelete() {}

  async function fetchData() {
    try {
      const response = await api.get('/vaquejada', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      const vaquejadasData = response.data.Vaquejada
      setVaquejadas(vaquejadasData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Main>
      <h1>Lista de vaquejadas</h1>

      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Local</th>
              <th>Data</th>
              <th>Hora</th>
              <th>Prêmio</th>
              <th>add</th>
            </tr>
          </thead>
          <tbody>
            {vaquejadas.map((vaquejada) => (
              <tr
                key={vaquejada.id}
                onClick={() => handleRowClick(vaquejada.id)}
              >
                <td>{vaquejada.title}</td>
                <td>{vaquejada.local}</td>
                <td>{vaquejada.date_create}</td>
                <td>{vaquejada.time_start}h</td>
                <td>{vaquejada.premium}</td>
                <td>
                  <button onClick={() => handleDelete()}>
                    <Plus />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Main>
  )
}
