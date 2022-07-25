import { SearchIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchAction, productFilter } from 'store/reducers/productList';

export default function Search() {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setValue(e.target.value);
        dispatch(searchAction(e.target.value));
        dispatch(productFilter());
    }

    return (
        <div className="flex items-center justify-center w-full max-w-4xl h-14 relative">
            <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none select-none" />
            <input type="text" className="w-full h-full outline-none px-12 border-gray-700 rounded-lg border-2" placeholder="Search in thousands of varieties" value={value} onChange={handleChange} />
        </div>
    )
}