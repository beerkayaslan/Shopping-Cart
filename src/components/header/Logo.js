import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to="/">
            <img className="w-[150px]" src="https://shop-pickbazar-rest.vercel.app/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F860%2FPickBazar.png&w=1920&q=75" />
        </Link>
    )
}