import { RiSearchLine } from "react-icons/ri";
import Image from "next/image";
import LogoPng from "@/app/assets/icons/logo.png"


function Nav(props) {
    return (
        <nav className="global-nav">
            <div className="left">
                <Image src={LogoPng} alt="logo" width={60} height={20} />
                <div className="global-searchbox">
                    <RiSearchLine />
                    <input type="search"
                        className="global-nav-search"
                        placeholder="Search" />

                </div>
            </div>
            <div className="right"></div>

        </nav>
    );
}

export default Nav;
