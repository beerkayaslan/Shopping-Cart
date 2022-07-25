import SearchSection from "components/home/SearchSection"
import Category from "components/home/Category"
import Products from "components/home/Products"
import SlideCart from "components/cart/slideCart"

export default function Home() {
    return (
        <>
            <SearchSection />
            <Category />
            <Products />
            <SlideCart />
        </>
    )
}