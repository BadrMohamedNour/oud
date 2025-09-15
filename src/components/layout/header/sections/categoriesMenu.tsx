import { useState } from "react"
import { MdMenu } from "react-icons/md"
import { GoChevronDown } from "react-icons/go"
import { Row, Col } from "antd"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"
import { Categories } from "@/types/categories"

interface CategoriesMenuProps {
  categories: Categories
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ categories }) => {
  const t = useTranslations("Header")
  const [subCategories, setSubCategories] = useState(categories.active_categories[0]?.children || [])

  return (
    <div className="categories">
      <button className="categories-trigger" aria-label={t("All Categories")}>
        <MdMenu size={24} />
        <span>{t("All Categories")}</span>
        <GoChevronDown size={24} />
      </button>

      <div className="categories-menu">
        <Row gutter={0}>
          <Col xs={24} lg={4}>
            <ul role="menu">
              {categories.active_categories.map((category) => (
                <li key={category.id} role="menuitem">
                  <Link href={category.slug} onMouseEnter={() => setSubCategories(category.children || [])}>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} lg={20}>
            <ul className="subCategories" role="menu">
              {subCategories.map((category) => (
                <li key={category.id} role="menuitem">
                  <Link href={category.slug}>
                    <span>{category.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </div>

      <div className="overlay" />
    </div>
  )
}

export default CategoriesMenu
