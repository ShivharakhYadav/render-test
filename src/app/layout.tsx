import { QueryProvider } from '@/components/provider/query-provider'
import { Auth0Provider } from '@auth0/nextjs-auth0'
import type { Metadata } from 'next'
import { Roboto, Montserrat } from 'next/font/google'
import './globals.css'
import { Provider } from '@/components/ui/provider'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
})

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Moto Venice',
  description:
    'Moto Venice is a luxury and exotic motorcycle sales and rental platform in Venice Beach, CA.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={`${montserrat.variable} ${roboto.variable}`} lang='en'>
      <body>
        <Auth0Provider>
          <QueryProvider>
            <Provider>{children}</Provider>
          </QueryProvider>
        </Auth0Provider>
      </body>
    </html>
  )
}
