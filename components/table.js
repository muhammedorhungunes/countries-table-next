import Router  from "next/router";

function Table({currentCountries}){
    
    //const router = useRouter();
    // function showDetailHandler(common) {
    //     Router.push('/' + common)
    // }
    return( 
        <div className='overflow-x-auto relative m-2 '>
            <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                    <tr>
                        <th scope="col" className='py-3 px-6'>
                            Name
                        </th>
                        <th scope="col" className='py-3 px-6'>
                            Flag
                        </th>
                        <th scope="col" className='py-3 px-6'>
                            Capital
                        </th>
                        <th scope="col" className='py-3 px-6'>
                            Population
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentCountries.map((country)=>
                        <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700' key={country.name.common}>
                            <th scope="row" className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                                {country.name?.common ?<span href="#" onClick={()=> Router.push('/' + country.cca3)} className="bg-purple-100 text-purple-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">{country.name.common}</span> : ''}
                            </th>
                            <td className='py-4 px-6'>
                                {country.flag ? country.flag : ''}
                            </td>
                            <td className='py-4 px-6'>
                                {country.capital ? country.capital : ''}
                            </td>
                            <td className='py-4 px-6'>
                                {country.population ? country.population : ''}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
           
        </div>
    );

}

export default Table;
