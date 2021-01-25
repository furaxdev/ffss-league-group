import data from '../data.json'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Home() {
  const [group, setgroup] = useState(null)
  const handleClick = () => {
    const id = document.getElementById('group').value
    let grouptoshow = data[id]
    setgroup({
      ...grouptoshow,
      name: id,
    })
  }
  return (
    <div className='container mt-4'>
      <input
        className='form-control'
        type='number'
        name='group'
        id='group'
        placeholder='Enter group'
      />
      <br />
      <button className='btn btn-success' onClick={handleClick}>
        Submit
      </button>
      <br />
      <br />

      {group ? (
        <>
          <h1 className='text-center'>Group {group.name}</h1>
          <br />
          <br />
          <table className='table'>
            <thead>
              <tr>
                <th>SLOT</th>
                <th>Team Name</th>
                <th>Team Tag</th>
                <th>Leader</th>
                <th>Players</th>
              </tr>
            </thead>
            <tbody>
              {group.teams.map((team) => {
                return (
                  <tr>
                    <td>{team.slot}</td>
                    <td>{team.guild_name}</td>
                    <td>{team.guild_tag}</td>
                    <td>{team.leader_id}</td>

                    <td>
                      <ul>
                        {team.players.map((player) => {
                          return (
                            <li>
                              <strong>{player.name}</strong> {'  '} {'('}
                              <strong>{player.freefire_id}</strong> {')'}
                            </li>
                          )
                        })}
                      </ul>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </>
      ) : (
        ''
      )}
    </div>
  )
}
