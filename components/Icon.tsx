import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

// IconsProps  = {
//   name: String,
//   size: number,
//   color: String,
//   strockeWidth: number,
//   absoluteStrokeWidth: boolean
// }

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}
const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports);

  return <LucideIcon {...props} />;
};

export default Icon;
