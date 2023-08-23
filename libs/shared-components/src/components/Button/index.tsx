import { Size } from '@libs/shared-types';

export interface IButtonProps {
  label: string;
  size?: Size;
}

export function Button({ label, size = Size.SM }: IButtonProps) {
  let heightStyle;
  switch (size) {
    case Size.SM: {
      heightStyle = '24px';
      break;
    }
    case Size.MD: {
      heightStyle = '32px';
      break;
    }
    case Size.LG: {
      heightStyle = '48px';
      break;
    }
  }

  return (
    <div>
      <button style={{ height: heightStyle }}>{label}</button>
    </div>
  );
}
