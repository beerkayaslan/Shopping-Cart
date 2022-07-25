import Search from "components/search/Search";

export default function SearchSection(){


    return (
        <div className="flex flex-col px-12 py-20 items-center justify-center bg-[url('https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/sites/3/2020/07/15171636/Bakery.jpg')] h-[450px] bg-no-repeat bg-center">
            <h1 className="font-bold text-4xl mb-7">Get Your Bakery Items Delivered</h1>
            <p className="mb-7">Get your favorite bakery items baked and delivered to your doorsteps at any time.</p>
            <Search />
        </div>
    )
}