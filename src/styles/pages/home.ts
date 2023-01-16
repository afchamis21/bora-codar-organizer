import { styled } from '..'

export const HomeContainer = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',

  backgroundColor: '$background-color',
  backgroundImage:
    'radial-gradient(circle at 30% 10%, hsl(45.88, 100%, 50%) 0, transparent min(500px, 45%)), radial-gradient(circle at 60% 80%, hsl(208.82, 100%, 20%) 0, transparent min(600px, 60%))',
})
