import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: "B'Lucca - Móveis Planejados",
  description: "Móveis planejados que unem estética, funcionalidade e inovação para tornar seu ambiente exclusivo.",
  generator: 'v0.dev',
  keywords: ['móveis planejados', 'marcenaria', 'design de interiores', 'móveis sob medida', 'São Paulo'],
  authors: [{ name: "B'Lucca" }],
  openGraph: {
    title: "B'Lucca - Móveis Planejados",
    description: "Móveis planejados que unem estética, funcionalidade e inovação para tornar seu ambiente exclusivo.",
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-1571460-5NjwGInJnzRLLD6n4n3O9goXloNRKY.jpeg',
        width: 1200,
        height: 630,
        alt: "B'Lucca Móveis Planejados",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8C7FWSM');`,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8C7FWSM"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}