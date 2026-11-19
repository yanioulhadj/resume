import type { Metadata } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Resume - Yani OULHADJ',
  description: 'CV de Yani OULHADJ - Développeur Web et Mobile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" type="image/x-icon" href="/assets/img/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body id="page-top">
        {children}
        <Script
          src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

