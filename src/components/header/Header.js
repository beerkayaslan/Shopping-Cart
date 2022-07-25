import Logo from "components/header/Logo";
import CartBox from "components/header/CartBox";

export default function Header() {
    return (
        <header className="bg-white border-b sticky top-0 flex z-10 items-center justify-between px-8 h-24 drop-shadow-sm">
            <Logo />
            <CartBox />
        </header>
    )
}