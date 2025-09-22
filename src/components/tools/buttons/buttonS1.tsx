// Components
import { Button } from "antd";

// Styles
import style from "./styles/buttons.module.scss";

// Types
type Props = {
  text: string | React.ReactNode;
  loading?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (values?: {}) => void;
};

const ButtonS2: React.FC<Props> = ({
  type = "button",
  text,
  loading,
  onClick,
}) => {
  return (
    <div className={style.buttonS1}>
      <Button
        htmlType={type}
        onClick={onClick}
        loading={loading}
        disabled={loading}
      >
        {text}
      </Button>
    </div>
  );
};

export default ButtonS2;
