export interface SVGProps {
  //   Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number | string;
  height?: number | string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  cursor?: 'pointer';
  onClick?: () => void;
}
