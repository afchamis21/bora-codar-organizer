import { SwitchContainer, SwitchRoot, SwitchThumb } from './styles'

interface ThemeSwitchProps {
  toggleFunction: () => void
}

export function ThemeSwitch({ toggleFunction }: ThemeSwitchProps) {
  return (
    <SwitchContainer>
      <label htmlFor="themeSwitch">Trocar Tema</label>
      <SwitchRoot id="themeSwitch" onCheckedChange={toggleFunction}>
        <SwitchThumb />
      </SwitchRoot>
    </SwitchContainer>
  )
}
