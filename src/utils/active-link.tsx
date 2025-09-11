import { usePathname } from "next/navigation";

interface Props {
  path: string;
}

const IsActiveLink = ({ path }: Props): boolean => {
  const currentPath = usePathname();
  return currentPath === path;
};

export default IsActiveLink;
