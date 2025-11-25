import { Button as AntdButton } from 'antd';
import { useDrag } from 'react-dnd';
import type { CommonComponentProps } from '../../../interface';

const Button = ({id, type, text, styles}: CommonComponentProps) => {

  const [_, drag] = useDrag({
      type: 'Button',
      item: {
          type: 'Button',
          dragType: 'move',
          id: id
      }
  });

  return (
    <AntdButton ref={drag as any} data-component-id={id} type={type} style={styles}>{text}</AntdButton>
  )
}

export default Button;