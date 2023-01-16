import { styled } from '../../styles'
import * as Switch from '@radix-ui/react-switch'

export const SwitchContainer = styled('form', {
  position: 'absolute',
  top: '2rem',
  right: '2rem',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',

  label: {
    color: '$switch-text',
    lineHeight: 1,
  },
})

export const SwitchRoot = styled(Switch.Root, {
  width: '42px',
  height: '25px',
  background: '$switch-background',
  position: 'relative',
  borderRadius: '9999px',
  border: 0,
})

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: '21px',
  height: '21px',
  background: '$switch-thumb',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',

  '&[data-state="checked"]': {
    transform: 'translateX(19px)',
  },
})
