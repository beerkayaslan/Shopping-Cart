import { Link } from "react-router-dom";
import LogoImg from "theme/logo.png";

export default function Logo() {
    return (
        <Link to="/">
            <img className="w-[80px] h-[30px]" src={LogoImg} />
        </Link>
    )
}