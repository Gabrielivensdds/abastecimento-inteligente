import { FormEvent, useState } from 'react'
import { MultiSelect } from '../MultiSelect'
import { RadioGroup } from '../RadioGroup'
import { StyledForm } from './styles'
import { SubTitle } from '../SubTitle'
import { Text } from '../Text'
import { Title } from '../Title'
import { InputIncremental } from '../InputIncremetal'

export function Form() {
  const [selectedOptions, setSelectedOptions] = useState<Option[]>([])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log('Opcoes selecionadas:', selectedOptions)
  }

  const options = [
    { value: '1054', label: '1054' },
    { value: '1896', label: '1896' },
    { value: '0159', label: '0159' },
    { value: '9876', label: '9876' },
    { value: '5347', label: '5347' },
  ]

  const optionsModAB = [
    { value: 'pace', label: 'Pace' },
    { value: 'vagas', label: 'Vagas' },
  ]

  const optionsFormCar = [
    { value: 'CalcVol', label: 'Cálculo por Volume' },
    { value: 'LoadMed', label: 'Load médio de peças' },
  ]

  return (
    <div>
      <Title text="Parametrização e Simulação - ABI" />
      <SubTitle text="Nessa parte do processo será requisitado todas as métricas necessárias para o cálculo do robô." />

      <StyledForm onSubmit={handleSubmit}>
        <Text text="MODO DE ABASTECIMENTO" />
        <RadioGroup options={optionsModAB} />
        <Text text="FORMAÇÃO DE CARROS" />
        <RadioGroup options={optionsFormCar} />
        <Text text="LEAD TIME WHP" />
        <InputIncremental />
        <MultiSelect options={options} onChange={setSelectedOptions} />

        <button type="submit">Enviar</button>
      </StyledForm>
    </div>
  )
}
