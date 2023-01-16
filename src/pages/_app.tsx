import { boraCodarOrganizer } from '@/lib/prismicio'
import { globalStyles } from '@/styles/global'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import type { AppProps } from 'next/app'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider internalLinkComponent={(props) => <Link {...props} />}>
      <PrismicPreview repositoryName={boraCodarOrganizer}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
