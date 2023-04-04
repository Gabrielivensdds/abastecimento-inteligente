import { useForm, Controller } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
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
  Label,
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

  const ParamESimFormValidationSchema = zod.object({
    RGModAbast: zod.string(),
    RGFormCar: zod.string(),
    RGLoadMed: zod.string().min(1).max(3),
    RGTpMdDoh: zod.string(),
    LeadTimeWp: zod.string().min(1).max(3),
    DivOrdPac: zod.string().min(1).max(3),
    SobraMin: zod.string().min(1).max(3),
    PostDias: zod.string().min(1).max(3),
    ClientAgrup: zod
      .array(
        zod.object({
          value: zod.string(),
          label: zod.string(),
        }),
      )
      .min(1, 'Selecione um cliente Agrupador'),
    CheckBox: zod.boolean(),
  })
  const { handleSubmit, control, formState } = useForm({
    defaultValues: {
      RGModAbast: optionsModAB[0].value,
      RGFormCar: optionsFormCar[0].value,
      RGLoadMed: '0',
      RGTpMdDoh: optionsTpMed[0].value,
      LeadTimeWp: '0',
      DivOrdPac: '0',
      SobraMin: '0',
      PostDias: '0',
      ClientAgrup: [],
      CheckBox: false,
    },
    resolver: zodResolver(ParamESimFormValidationSchema),
  })
  console.log(formState.errors)

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
          <Controller
            name="RGTpMdDoh"
            control={control}
            render={({ field }) => (
              <RadioGroup options={optionsTpMed} onChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>LEAD TIME WHP</Text>
          <Controller
            name="LeadTimeWp"
            control={control}
            render={({ field }) => (
              <InputIncremental onValueChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIVISÃO DE ORDENS EM PACOTES DE</Text>
          <Controller
            name="DivOrdPac"
            control={control}
            render={({ field }) => (
              <InputIncremental onValueChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>MÍNIMO DE SOBRAS P/ INFORMAR PIVO</Text>
          <Controller
            name="SobraMin"
            control={control}
            render={({ field }) => (
              <InputIncremental onValueChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
        <ItemFormConteiner>
          <Text>DIAS PARA POSTERGAR</Text>
          <Controller
            name="PostDias"
            control={control}
            render={({ field }) => (
              <InputIncremental onValueChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner>
          <Text>CLIENTE AGRUPADOR</Text>
          <Controller
            name="ClientAgrup"
            control={control}
            render={({ field }) => (
              <MultiSelect options={options} onChange={field.onChange} />
            )}
          />
        </ItemFormConteiner>
      </LineFormConteiner>
      <LineFormConteiner>
        <ItemFormConteiner css={{ flexDirection: 'row', alignItems: 'center' }}>
          <Controller
            name="CheckBox"
            control={control}
            render={({ field }) => (
              <CheckBox id="d1" onValueChange={field.onChange} />
            )}
          />
          <Label htmlFor="d1">Reservas Consideradas Full</Label>
        </ItemFormConteiner>
      </LineFormConteiner>
      <Button css={{ alignSelf: 'end' }}>
        <PlayCircle size={22} />
        <span>Enviar</span>
      </Button>
    </StyledForm>
  )
}
