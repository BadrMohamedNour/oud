import Image from "next/image";

function PaymentInfo() {
  return (
    <div className="payment-info">
      <div className="details">
        <div className="text-container">
          <span>السجل التجاري: 23456789011</span>
          <span>الرقم الضريبي: 123456789011</span>
        </div>
        <ul>
          <li>
            <Image
              src="/icons/payments/mada.svg"
              width={61}
              height={20}
              alt="Mada payment"
            />
          </li>
          <li>
            <Image
              src="/icons/payments/visa.svg"
              width={58}
              height={18}
              alt="Visa payment"
            />
          </li>
          <li>
            <Image
              src="/icons/payments/mastercard.svg"
              width={44}
              height={27}
              alt="Mastercard payment"
            />
          </li>
          <li>
            <Image
              src="/icons/payments/applepay.svg"
              width={59}
              height={24}
              alt="Apple Pay payment"
            />
          </li>
          <li>
            <Image
              src="/icons/payments/bank.svg"
              width={32}
              height={32}
              alt="Bank payment"
            />
          </li>
        </ul>
      </div>

      <ul className="logos">
        <li>
          <Image
            src="/icons/payments/layer_2.svg"
            width={145}
            height={65}
            alt="Logo 1"
          />
        </li>
        <li>
          <Image
            src="/icons/payments/layer_1.svg"
            width={85}
            height={106}
            alt="Logo 2"
          />
        </li>
      </ul>
    </div>
  );
}

export default PaymentInfo;
