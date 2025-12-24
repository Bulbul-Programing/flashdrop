import Logo from "@/assets/Icon/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-primary/10 px-5 mb-5">
            <div className="">
                {/* Logo Section */}
                <div className="flex flex-col items-center">
                    <Link to="/" className="flex flex-col items-center">
                        <Logo />
                        <h1 className="text-xl font-black mt-2">Flash Drop</h1>
                    </Link>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center border-t border-gray-100 pt-8">


                    <div>
                        <p className="font-medium ">Company</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link className=" hover:opacity-75" to="/aboutUs">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className=" hover:opacity-75" to="/contactUs">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link className=" hover:opacity-75" to="/privacy">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium ">Helpful Links</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link className=" hover:opacity-75" to="/contactUs">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link className=" hover:opacity-75" to="/#faq">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="font-medium ">Legal</p>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li>
                                <Link className=" hover:opacity-75" to="#">
                                    Accessibility
                                </Link>
                            </li>
                            <li>
                                <Link className=" hover:opacity-75" to="#">
                                    Returns Policy
                                </Link>
                            </li>
                            <li>
                                <Link className=" hover:opacity-75" to="#">
                                    Refund Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <p className="text-xs  text-center">
                    © {new Date().getFullYear()} Flash Drop. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
