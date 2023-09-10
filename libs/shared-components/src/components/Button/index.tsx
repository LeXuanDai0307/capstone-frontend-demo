import { ESize } from '@libs/shared-common/enums';

export interface IButtonProps {
  label: string;
  size?: ESize;
}

export function Button({ label, size = ESize.SM }: IButtonProps) {
  let heightStyle;
  switch (size) {
    case ESize.SM: {
      heightStyle = '24px';
      break;
    }
    case ESize.MD: {
      heightStyle = '32px';
      break;
    }
    case ESize.LG: {
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
