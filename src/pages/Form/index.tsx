import { useForm, Controller } from 'react-hook-form'
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

export function FormPage() {
  const handleCreateSimulation = (data: any) => {
    console.log(data)
  }

  const { register, handleSubmit, control } = useForm({
    defaultValues: {
      RGModAbast: optionsModAB[0].value,
      RGFormCar: optionsFormCar[0].value,
      RGLoadMed: '0',
    },
  })

  return (
    <StyledForm onSubmit={handleSubmit(handleCreateSimulation)}>
      <TitleFormConteiner>
        <Title>Parametrização e Simulação - ABI</Title>
        <SubTitle>
          Nessa parte do processo será requisitado todas as métricas necessárias
          para o cálculo do robô.
        </SubTitle>
      </TitleFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>MODO DE ABASTECIMENTO</Text>
          <Controller
            name="RGModAbast"
            control={control}
            render={({ field }) => (
              <RadioGroup options={optionsModAB} onChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>FORMAÇÃO DE CARROS</Text>

          <Controller
            name="RGFormCar"
            control={control}
            render={({ field }) => (
              <RadioGroup options={optionsFormCar} onChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>LOAD MÉDIO</Text>
          <Controller
            name="RGLoadMed"
            control={control}
            render={({ field }) => (
              <InputIncremental onValueChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>TIPO DE MÉDIA DOH</Text>
          <RadioGroup options={optionsTpMed} {...register('TpMdDoh')} />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>LEAD TIME WHP</Text>
          <InputIncremental {...register('LeadTimeWp')} />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIVISÃO DE ORDENS EM PACOTES DE</Text>
          <InputIncremental {...register('DivOrdPac')} />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>MÍNIMO DE SOBRAS P/ INFORMAR PIVO</Text>
          <InputIncremental {...register('SobraMin')} />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIAS PARA POSTERGAR</Text>
          <InputIncremental {...register('PostDias')} />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>CLIENTE AGRUPADOR</Text>
          <MultiSelect options={options} {...register('ClientAgrup')} />
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
