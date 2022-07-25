import categoryData from "data/category.json";

import CategoryItem from "components/home/CategoryItem";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { categorySelectAction, productFilter } from "store/reducers/productList";

export default function Category() {
    const slidesPerView = 10;
    const [id, setId] = useState(null);
    const dispatch = useDispatch();

    const categorySelectHandle = (select_id) => {
        if(select_id === id){
            setId("");
            dispatch(categorySelectAction(""));
            dispatch(productFilter());
        }else{
            setId(select_id);
            dispatch(categorySelectAction(select_id));
            dispatch(productFilter());
        }
    }

    
    return (
        <div className="px-8 mt-8">
            <p className="mb-1 font-semibold">Categories</p>
            <Swiper
                simulateTouch={false}
                navigation={true}
                modules={[Navigation]}
                className={`category-list`}
                breakpoints={{
                    "300": {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    "400": {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    "640": {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    "768": {
                        slidesPerView: 5,
                        spaceBetween: 16,
                    },
                    "1024": {
                        slidesPerView: 7,
                        spaceBetween: 16,
                    },
                    "1280": {
                        slidesPerView: 10,
                        spaceBetween: 16,
                    },
                    "1536": {
                        slidesPerView: slidesPerView,
                        spaceBetween: 16,
                    }
                }}>
                {
                    categoryData && categoryData.map(item => <SwiperSlide className={`border-2 transition-all  ${id === item.id ?  "border-black" : "border-transparent"}`} key={item.id} onClick={() => categorySelectHandle(item.id)} ><CategoryItem  key={item.id} item={item} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}