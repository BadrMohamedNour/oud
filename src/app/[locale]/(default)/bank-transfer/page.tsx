//Components
import BankTransferComponent from "@/components/menu/bankTransferComponent/bankTransferComponent"

// Types
import { Metadata } from "next"

const BankTransferPage: React.FC = async () => {
  return <BankTransferComponent />
}

export default BankTransferPage

export const metadata: Metadata = {
  title: "التحويل المصرفي",
}
