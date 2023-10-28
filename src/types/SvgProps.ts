export interface SVGProps {
  //   Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  cursor?: 'pointer';
  onClick?: () => void;
}
