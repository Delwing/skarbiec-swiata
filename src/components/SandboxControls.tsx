import {useState} from 'react'

interface Member {
  id: number
  name: string
}

export default function SandboxControls() {
  const [nextId, setNextId] = useState(1)

  const addMember = () => {
    const member: Member = { id: nextId, name: `Member ${nextId}` }
    window.dispatchEvent(new CustomEvent('sandbox:add-member', { detail: member }))
    setNextId((id) => id + 1)
  }

  const setLeader = () => {
    const id = Math.max(1, nextId - 1)
    window.dispatchEvent(new CustomEvent('sandbox:set-leader', { detail: { id } }))
  }

  return (
    <div className="sandbox-controls">
      <h2>Sandbox</h2>
      <button onClick={addMember}>Add team member</button>
      <button onClick={setLeader}>Set leader</button>
    </div>
  )
}
