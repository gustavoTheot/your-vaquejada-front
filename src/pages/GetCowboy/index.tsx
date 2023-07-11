import { useEffect, useState } from 'react'
import { TableContainer, Table, Main } from './styles'
import { api } from '../../lib/axios'
import { Trash } from 'phosphor-react'
import { useParams } from 'react-router-dom'

interface CowboyProps {
  id: number
  password: string
  cowboy_name: string
  beats_treadmill: string
  horse: string
  horse_beats_treadmill: string
  boi_tv: boolean
  cats_cut: boolean
  advanced_password: boolean
  return_cowboy: boolean
  phase: number
}

export function GetCowboy() {
  const [cowboy, setCowboy] = useState<CowboyProps[]>([])
  const { id } = useParams<{ id: string }>()

  async function getVaqueiros() {
    try {
      const response = await api.get(`/vaquejadas/${id}`)
      const cowboysData = response.data.cowboys
      setCowboy(cowboysData)
    } catch (error) {
      alert('Ocorreu um erro ao carregar as vaquejadas, tente novamente.')
    }
  }

  useEffect(() => {
    getVaqueiros()
  }, [])

  return (
    <Main>
      <h1>Lista de Vaqueiros</h1>
      <TableContainer>
        <Table>
          <thead>
            <tr>
              <th>Senha</th>
              <th>Puxador</th>
              <th>Valeu boi</th>
              <th>Zero</th>
              <th>Rabo da gata</th>
              <th>Retorno</th>
              <th>Boi TV</th>
              <th>Del</th>
            </tr>
          </thead>
          <tbody>
            {cowboy.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.password}</td>
                  <td>{item.cowboy_name}</td>
                  <td>{'value'}</td>
                  <td>{'zero'}</td>
                  <td>{item.cats_cut}</td>
                  <td>{item.return_cowboy}</td>
                  <td>{item.boi_tv}</td>
                  <td>
                    <button>
                      <Trash size={24} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </TableContainer>
    </Main>
  )
}
