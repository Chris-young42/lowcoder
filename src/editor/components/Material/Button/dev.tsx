import { Button as AntdButton } from "antd";
import type { CommonComponentProps } from "../../../interface";
import { useDrag } from "react-dnd";
// import type { ButtonType } from "antd/es/button";

// export interface ButtonProps {
//   type: ButtonType;
//   text: string;
// }

const Button = ({ type, text, id, styles }: CommonComponentProps) => {
  const [_, drag] = useDrag({
    type: "Button",
    item: {
      type: "Button",
    },
  });

  return (
    <AntdButton
      ref={drag as any}
      data-component-id={id}
      type={type}
      style={styles}
    >
      {text}
    </AntdButton>
  );
};

export default Button;
