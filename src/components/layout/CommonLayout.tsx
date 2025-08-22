import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface IProps {
    children: ReactNode;
}

const CommonLayout = ({ children }: IProps) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default CommonLayout;