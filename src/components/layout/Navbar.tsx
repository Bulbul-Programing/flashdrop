import Logo from "@/assets/Icon/Logo"
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from "../ui/ThemeToggle"
import { useEffect, useState } from "react"
import UserStatus from "./UserStatus"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
    { href: "/", label: "Home", active: true },
    { href: "/tracking", label: "Tracking" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/contactUs", label: "Contact Us" },
    { href: "/privacy", label: "Privacy" },
]

export default function Navbar() {
    const location = useLocation()
    const [hideNavbar, setHideNavbar] = useState(false);
    const [scrollValue, setScrollValue] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollValue < window.scrollY) {
                setHideNavbar(true);
            } else {
                setHideNavbar(false);
            }
            setScrollValue(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollValue]);

    return (
        <header className={`sticky px-5 top-0 z-50 bg-background ${hideNavbar ? "translate-y-[-110px]" : "top-0 translate-y-0"} backdrop-blur transition duration-500 border-b`}>
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
                        <PopoverContent align="start" className="w-36 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => (
                                        <NavigationMenuItem key={index} className="w-full">
                                            <NavigationMenuLink
                                                href={link.href}
                                                asChild
                                                className={`py-1.5 ${location.pathname === link.href ? "text-primary font-semibold" : ""}`}
                                            >
                                                <Link to={link.href}>{link.label} </Link>
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* Main nav */}
                    <div className="flex items-center gap-6">
                        <Link to='/' className="flex items-center">
                            <Logo />
                            <h1 className="text-xl font-black">Flash Drop</h1>
                        </Link>
                        {/* Navigation menu */}
                        <NavigationMenu className="max-md:hidden">
                            <NavigationMenuList className="gap-2">
                                {navigationLinks.map((link, index) => (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuLink
                                            href={link.href}
                                            asChild
                                            className={`py-1.5 font-medium hover:text-primary ${location.pathname === link.href ? "text-primary bg-secondary" : ""}`}
                                        >
                                            <Link to={link.href}>{link.label}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                                {/* {
                                    userInfo?.data?.email && <NavigationMenuItem >
                                        <NavigationMenuLink
                                            href={`/${userInfo?.data?.role}`}
                                            asChild
                                            className={`py-1.5 font-medium hover:text-primary`}
                                        >
                                            <Link to={`/${userInfo?.data?.role}`}>Dashboard</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                } */}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <UserStatus />
                    {/* {
                        isLoading ? <Skeleton className="h-8 w-[70px] rounded-md" /> :
                            <div>
                                {
                                    userInfo?.data?.email ?
                                        <Button onClick={handleLogout} disabled={loading} variant="ghost" size="sm" className="text-sm bg-primary cursor-pointer border-blue-500 border text-secondary">
                                            Logout
                                        </Button>
                                        :
                                        <Button variant="ghost" size="sm" className="text-sm bg-primary cursor-pointer border-blue-500 border text-secondary">
                                            <Link to='/login'>Login</Link>
                                        </Button>
                                }
                            </div>
                    } */}
                </div>
            </div>
        </header>
    )
}
