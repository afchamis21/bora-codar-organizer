import { styled } from '@/styles'

export const CardContainer = styled('main', {
  backdropFilter: 'blur(16px) saturate(180%)',
  '-webkit-backdrop-filter': 'blur(16px) saturate(180%)',
  backgroundColor: '$card-color',
  borderRadius: '12px',
  border: '1px solid rgba(255, 255, 255, 0.125)',
  color: '$text-color',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'center',
  height: '25rem',
  maxWidth: '20rem',
})

export const CardHeader = styled('header', {
  borderBottom: '1px solid rgba(255, 255, 255, 0.125)',
  padding: '1rem 1rem 0.5rem',

  '&:has(a:hover) p:not(:hover)': {
    filter: 'opacity(0.4)',
  },

  a: {
    display: 'inline',
  },
  p: {
    display: 'inline',
    transition: 'filter 0.2s',
  },
})

export const LinksListContainer = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: '1rem',
})

export const LinkContainer = styled('li', {
  listStyle: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0.5rem 0',

  '&+li': {
    borderTop: '1px solid rgba(255, 255, 255, 0.125)',
  },

  a: {
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',

    '&:hover': {
      filter: 'opacity(0.6)',
      transition: 'filter 0.2s',
    },
  },
})

export const CardFooter = styled('footer', {
  fontSize: '0.875rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.125)',
  padding: '0.5rem 1rem 1rem',
})
