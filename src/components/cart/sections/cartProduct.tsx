"use client"

// Compoents
import Image from "next/image"
import { Button } from "antd"

// Hooks
import { useState } from "react"

// Icons
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import currency from "../../../../public/icons/currency.svg"

// Types
import { ProductItem } from "@/types/cart"
import { useTranslations } from "next-intl"

const CartProduct: React.FC<{ item: ProductItem }> = ({ item }) => {
  const t = useTranslations("Cart")
  const [quantity, setQuantity] = useState(item?.quantity)

  const increaseQuantityHandler = () => {
    if (quantity >= item?.quantity) {
      return
    }
    setQuantity(quantity + 1)
  }

  const decreaseQuantityHandler = () => {
    if (quantity === 1) {
      return
    }
    setQuantity(quantity - 1)
  }

  if (!item) return null

  return (
    <div className="product flexCenter">
      <div className="product-info flexCenter">
        <div className="img">
          <Image src={item.product.feature_image} alt={item.product.name} fill objectFit="contain" />
        </div>
        <div>
          <h3>{item.product.category.name}</h3>
          <h2>{item.product.name}</h2>
        </div>
      </div>

      <div className="quantity">
        <h3>{t("Quantity")}</h3>
        <div className="quantityBtns flexCenter flexStart">
          <Button onClick={decreaseQuantityHandler}>
            <FaMinus />
          </Button>
          <input id="quantity" name="quantity" value={quantity} onChange={() => {}} />

          <Button onClick={increaseQuantityHandler}>
            <FaPlus />
          </Button>
        </div>
      </div>

      <div className="price">
        <h3>{t("Total price")}</h3>
        <div className="flexCenter flexStart">
          <span>{item.total_price}</span>
          <Image src={currency} alt={t("SAR")} height={15} width={15} />
        </div>
      </div>

      <Button className="removeItemBtn">
        <FaTrash color="#ed1c24" size={24} />
      </Button>
    </div>
  )
}

export default CartProduct
