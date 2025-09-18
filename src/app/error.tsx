"use client"

// Components
import Link from "next/link"

interface ErrorPageProps {
  error: Error
  reset: () => void
}

// Hooks
import { useTranslations } from "next-intl"

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const t = useTranslations("Error")

  return (
    <main className="error-page">
      <div className="error-title">{t("Something went wrong")}</div>
      <h2 className="error-message">
        {t("Error Message")}: {error.message}
      </h2>
      <button onClick={() => reset()} className="retry-button">
        <span>{t("Try again")}</span>
      </button>
      <Link className="home-link" href="/">
        {t("Go To Home")}
      </Link>
    </main>
  )
}

export default ErrorPage
