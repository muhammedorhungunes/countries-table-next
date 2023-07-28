import SelectMenu from './selectMenu';
import Pagination from './pagination';
import Search from './search';
import { useState, useEffect } from 'react';
import {selectPaginate,set} from './paginateSlice';
import { useSelector, useDispatch } from 'react-redux';
import Table from './table';



function Main(props){
    const [countries, setCountries] =  useState(props.countries);
    const [localCountries, setLocalCountries] =  useState(props.countries);
    const [filteredContinents , setFilteredContinents] = useState([]);
    const [selected, setSelected] = useState('No Filter');
    const [searchValue, setSearchValue] = useState('');
    const [countriesPerPage] = useState(10);
    const dispatch = useDispatch();
    const currentPage = useSelector(selectPaginate);
   
    useEffect(()=>{
        setSearchValue('');
        
        setCountries(
            selected === 'No Filter'
            ? localCountries
            : localCountries.filter((country) => {
                return country.continents[0].toLowerCase().includes(selected.toLowerCase())
            })
        );
       
        dispatch(set(1));
    },[selected]);

  

    useEffect(()=>{
        setSelected(selected)
       
        dispatch(set(1));
       
        setCountries(
            searchValue === ''
            ? localCountries
            : localCountries.filter((country) => country.name.common.toLowerCase().includes(searchValue.toLowerCase()))
        );     
    }, [searchValue])
    

    useEffect(() => {
        var items = ['No Filter'];
        if(localCountries.length){
            localCountries.map((value)=>{
                if(!items.includes(value.continents[0]))
                    items.push(value.continents[0]);
            });
        }
        setFilteredContinents(items);
    },[countries]);


    const indexOfLastPost = currentPage * countriesPerPage;
    const indexOfFirstPost = indexOfLastPost - countriesPerPage;
    const currentCountries = countries.slice(indexOfFirstPost, indexOfLastPost);
  
    
    return( 
        <div className='overflow-x-auto relative m-2 '>
            <div className='flex flex-row w-full'>
                <div className='basis-1/2 '>
                <SelectMenu filteredContinents={filteredContinents} selected={selected} setSelected={setSelected}/>
                </div>
            
                <div className='basis-1/2'>
                    <Search setSearchValue={setSearchValue} searchValue={searchValue}/>
                </div>
            </div>
            <Table currentCountries={currentCountries}/>
            <div className='w-full m-1'>
                <Pagination  countriesPerPage={countriesPerPage} totalCountries={countries.length} />
            </div>
        </div>
    );

}

export default Main;
