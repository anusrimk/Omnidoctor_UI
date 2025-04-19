import * as LucideIcons from "lucide-react";

export const IconRenderer = ({ iconName, size = 18, className }) => {
  const Icon = LucideIcons[iconName];
  return Icon ? <Icon size={size} className={className} /> : null;
};