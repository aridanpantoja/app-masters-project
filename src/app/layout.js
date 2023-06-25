import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: 'App Master Games',
  description: 'Projeto de Estágio Front-End React',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
