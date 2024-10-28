import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {} from "../ui/navigation-menu";

export default function Navbar() {
  const menuList = ["Home", "About", "Projects", "Contact Me"];
  const pageId = ["home", "about", "projects", "contact-me"];

  return (
    <nav className="h-14 border-b flex items-center px-5 fixed w-full bg-white top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-5">
          <img src="src/assets/logo.png" alt="logo" className="w-[50px]" />
        </div>

        <div id="tempat-menu" className="hidden md:flex gap-5">
          {menuList.map((e, index) => {
            return (
              <Button key={index} variant={"ghost"} asChild>
                <a href={`#${pageId[index]}`}>{e}</a>
              </Button>
            );
          })}
        </div>

        <div id="tempat-menu-mobile" className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button>
                <Menu />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-20 mr-5">
              {menuList.map((e, index) => {
                return (
                  <DropdownMenuItem key={index} asChild>
                    <a href={`#${pageId[index]}`}>{e}</a>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
