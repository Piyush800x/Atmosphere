import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import SearchIcon from '../assets/icons/search_icon.svg'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const history = useNavigate ();
    
    const handleSearchChnage = (event) => {
        setSearchTerm(event.target.value);
    }

    const handleSearch = async () => {
        console.log(`Search: ${searchTerm}`);
        history('/data', {searchTerm});
    }


  return (
    <div className='font-cabin text-white absolute top-5 right-14 mb-2'>
        <div className='flex flex-row'>
            <div className='flex flex-row '>
                <input className='px-3 py-2 w-48 border-none outline-none bg-white bg-opacity-20 border-gray-300 rounded-2xl transition-all duration-100 ease-in-out' 
                    type="text" 
                    placeholder='Search.' 
                    value={searchTerm}
                    onChange={handleSearchChnage}
                    />
                <button onClick={handleSearch} className='-ml-8 '><span><img src={SearchIcon} width={20} height={20}/></span></button>
            </div>
        </div>
    </div>
  )
}

export default SearchBar
