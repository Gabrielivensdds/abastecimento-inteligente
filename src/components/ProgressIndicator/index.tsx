import { useEffect, useState } from 'react'
import { StyledProgressIndicator, ProgressRoot } from './styles'

interface ProgressIndicatorProps {
  step: number
}

export function ProgressIndicator({ step }: ProgressIndicatorProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    setProgress(step)
  }, [step])

  return (
    <ProgressRoot value={progress}>
      <StyledProgressIndicator
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </ProgressRoot>
  )
}
