// Actions
import { getAppData } from "@/apiCalls/appApiCall"
import { getCategories } from "@/apiCalls/categoriesApiCall"

// Wrrapers

import { NextIntlClientProvider } from "next-intl"
import { getLocale, getMessages } from "next-intl/server"

// Styles
import "swiper/css"
import "swiper/css/pagination"
import "@/styles/globals.scss"
import "@/styles/sections.scss"

// Types
interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const [messages] = await Promise.all([getMessages(), getAppData(), getCategories()])
  const locale = await getLocale()
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  )
}
