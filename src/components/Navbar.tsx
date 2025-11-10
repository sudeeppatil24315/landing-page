import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { GradientButton } from "@/components/ui/gradient-button"
import { APP_CONFIG } from "@/config/app"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const navigationLinks = [
  { href: "#", label: "Home" },
  {
    label: "Features",
    submenu: true,
    type: "description",
    items: [
      {
        href: "#features",
        label: "AI-Powered Analysis",
        description: "Advanced machine learning for real-time feedback.",
      },
      {
        href: "#features",
        label: "Code Evaluation",
        description: "Practice coding with automated reviews.",
      },
      {
        href: "#features",
        label: "Progress Tracking",
        description: "Monitor your improvement over time.",
      },
    ],
  },
  {
    label: "Pricing",
    submenu: true,
    type: "simple",
    items: [
      { href: "#pricing", label: "Starter Plan" },
      { href: "#pricing", label: "Professional" },
      { href: "#pricing", label: "Enterprise" },
    ],
  },
  {
    label: "Resources",
    submenu: true,
    type: "icon",
    items: [
      { href: "#", label: "Getting Started", icon: "BookOpenIcon" },
      { href: "#", label: "Tutorials", icon: "LifeBuoyIcon" },
      { href: "#", label: "About Us", icon: "InfoIcon" },
    ],
  },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  className="group size-8 md:hidden"
                  variant="ghost"
                  size="icon"
                >
                  <svg
                    className="pointer-events-none"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12L20 12"
                      className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                    />
                    <path
                      d="M4 12H20"
                      className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent align="start" className="w-64 p-1 md:hidden">
                <NavigationMenu className="max-w-none *:w-full">
                  <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        {link.submenu ? (
                          <>
                            <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                              {link.label}
                            </div>
                            <ul>
                              {link.items.map((item, itemIndex) => (
                                <li key={itemIndex}>
                                  <NavigationMenuLink
                                    href={item.href}
                                    className="py-1.5"
                                  >
                                    {item.label}
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <NavigationMenuLink href={link.href} className="py-1.5">
                            {link.label}
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </PopoverContent>
            </Popover>

            {/* Main nav */}
            <div className="flex items-center gap-6">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                AI Interview
              </a>

              {/* Navigation menu */}
              <div className="max-md:hidden">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        {link.submenu ? (
                          <>
                            <NavigationMenuTrigger className="text-gray-300 hover:text-white bg-transparent px-2 py-1.5 font-medium">
                              {link.label}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul
                                className={cn(
                                  "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]",
                                  link.type === "description" && "md:grid-cols-1"
                                )}
                              >
                                {link.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <NavigationMenuLink asChild>
                                      <a
                                        href={item.href}
                                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                      >
                                        {link.type === "icon" && "icon" in item && (
                                          <div className="flex items-center gap-2">
                                            {item.icon === "BookOpenIcon" && (
                                              <BookOpenIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "LifeBuoyIcon" && (
                                              <LifeBuoyIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            {item.icon === "InfoIcon" && (
                                              <InfoIcon
                                                size={16}
                                                className="text-foreground opacity-60"
                                                aria-hidden="true"
                                              />
                                            )}
                                            <div className="text-sm font-medium leading-none">
                                              {item.label}
                                            </div>
                                          </div>
                                        )}
                                        {link.type === "description" && "description" in item && (
                                          <>
                                            <div className="text-sm font-medium leading-none">
                                              {item.label}
                                            </div>
                                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                              {item.description}
                                            </p>
                                          </>
                                        )}
                                        {link.type === "simple" && (
                                          <div className="text-sm font-medium leading-none">
                                            {item.label}
                                          </div>
                                        )}
                                      </a>
                                    </NavigationMenuLink>
                                  </li>
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <NavigationMenuLink asChild>
                            <a
                              href={link.href}
                              className="text-gray-300 hover:text-white py-1.5 px-2 font-medium"
                            >
                              {link.label}
                            </a>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                  <NavigationMenuViewport />
                </NavigationMenu>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="text-sm text-gray-300 hover:text-white">
              <a href={APP_CONFIG.getMainAppUrl(APP_CONFIG.routes.signin)}>Sign In</a>
            </Button>
            <GradientButton variant="variant" asChild className="text-sm px-6 py-2 min-w-0">
              <a href={APP_CONFIG.getMainAppUrl(APP_CONFIG.routes.signup)}>Get Started</a>
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  )
}
