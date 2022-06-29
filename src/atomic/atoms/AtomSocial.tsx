import { IconProps } from 'phosphor-react';
import { FC, ForwardRefExoticComponent, RefAttributes } from 'react';

type AtomSocialProps = {
  linkTo?: string;
  IconComponent: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
};

export const AtomSocial: FC<AtomSocialProps> = ({ IconComponent, linkTo }) => {
  return (
    <a href={linkTo} className="flex items-center" target="_blank" rel="noreferrer">
      <IconComponent
        size={28}
        weight="light"
        className="hover:text-imob-orange-700 text-imob-blue-900 font-normal"
      />
    </a>
  );
};
