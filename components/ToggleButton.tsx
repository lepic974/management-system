import Link from "next/link";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

export const ToggleButton = () => {
  return (
    <NavigationMenuItem>
      <Link href="/contact" legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          Contact
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
};
