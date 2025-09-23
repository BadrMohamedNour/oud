// cOMPONENTS
import Link from "next/link"
import Image from "next/image"
import ButtonS1 from "@/components/tools/buttons/buttonS1"

// Hooks
import { getTranslations } from "next-intl/server"

export default async function NotFound() {
  const t = await getTranslations("NotFound")

  return (
    <main className="notFoundPage container flexColumn flexCenter">
      <Image src="/images/404.png" width={532} height={355} alt="404 not found image" />
      <p>{t("Sorry, the page you requested could not be found Please refer to the home page")}</p>
      <Link href="/">{/* <ButtonS1 title={t("Go To Home")} /> */}</Link>
    </main>
  )
}

export const generateMetadata = async () => {
  const t = await getTranslations("metadata")

  return {
    title: t("The requested page does not exist"),
    description: t("The requested page does not exist"),
  }
}
