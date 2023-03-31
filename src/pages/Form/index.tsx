import { FormEvent, useState } from 'react'
import { MultiSelect } from '../../components/MultiSelect'
import { RadioGroup } from '../../components/RadioGroup'
import { SubTitle } from '../../components/SubTitle'
import { Text } from '../../components/Text'
import { Title } from '../../components/Title'
import { InputIncremental } from '../../components/InputIncremetal'
import { Button } from '../../components/Button'
import { PlayCircle } from '@phosphor-icons/react'
import { CheckBox } from '../../components/Checkbox'
import {
  ItemFormConteiner,
  LineFormConteiner,
  StyledForm,
  TitleFormConteiner,
} from './styles'

export function FormPage() {
  const [selectedOptions, setSelectedOptions] = useState<(typeof Option)[]>([])

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

  const optionsTpMed = [
    { value: 'movel', label: 'Móvel' },
    { value: 'fixo', label: 'Fixo' },
  ]

  return (
    <StyledForm onSubmit={handleSubmit}>
      <TitleFormConteiner>
        <Title text="Parametrização e Simulação - ABI" />
        <SubTitle text="Nessa parte do processo será requisitado todas as métricas necessárias para o cálculo do robô." />
      </TitleFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>MODO DE ABASTECIMENTO</Text>
          <RadioGroup options={optionsModAB} />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>FORMAÇÃO DE CARROS</Text>
          <RadioGroup options={optionsFormCar} />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>LOAD MÉDIO</Text>
          <InputIncremental />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>TIPO DE MÉDIA DOH</Text>
          <RadioGroup options={optionsTpMed} />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>LEAD TIME WHP</Text>
          <InputIncremental />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIVISÃO DE ORDENS EM PACOTES DE</Text>
          <InputIncremental />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>MÍNIMO DE SOBRAS P/ INFORMAR PIVO</Text>
          <InputIncremental />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIAS PARA POSTERGAR</Text>
          <InputIncremental />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>CLIENTE AGRUPADOR</Text>
          <MultiSelect options={options} onChange={setSelectedOptions} />
          <CheckBox>Reservas consideradas Full</CheckBox>
        </ItemFormConteiner>
      </LineFormConteiner>
      <Button css={{ alignSelf: 'end' }}>
        <PlayCircle size={22} />
        <span>Enviar</span>
      </Button>
    </StyledForm>
  )
}
