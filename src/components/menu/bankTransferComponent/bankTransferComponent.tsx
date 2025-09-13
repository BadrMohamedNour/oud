import LogoBlack from "@/assets/svg/logoBlack"

// Style
import style from "./styles/bankTransferComponent.module.scss"
import Image from "next/image"
import alrajhi from "/public/images/payment/alrajhi.svg"
import alinma from "/public/images/payment/alinma.svg"

const BankTransferComponent = () => {
  return (
    <main className={`${style.bankTransferComponent} container`}>
      <section className="head">
        <div className="logo">
          <LogoBlack />
        </div>
      </section>

      <section className="content">
        <div className="image-wrapper alrajhi">
          <Image src={alrajhi} width={300} height={275} style={{ width: "100%", height: "100%" }} alt="alrajhi bank" />
        </div>

        <div className="image-wrapper alinma">
          <Image src={alinma} width={300} height={275} style={{ width: "100%", height: "100%" }} alt="alinma bank" />
        </div>
      </section>
    </main>
  )
}

export default BankTransferComponent
