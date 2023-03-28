import { FormEvent, useState } from 'react'
import { MultiSelect } from '../MultiSelect'

export function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Nome:', name)
    console.log('E-mail:', email)
    console.log('Selected options:', selectedOptions)
  }

  const options = [
    { value: '1054', label: '1054' },
    { value: '1896', label: '1896' },
    { value: '0159', label: '0159' },
    { value: '9876', label: '9876' },
    { value: '5347', label: '5347' },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <MultiSelect options={options} onChange={setSelectedOptions} />

      <button type="submit">Enviar</button>
    </form>
  )
}
