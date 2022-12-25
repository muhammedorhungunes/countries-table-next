import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'


function Search({ setSearchValue, searchValue}) {
    return (
      <>
        <div>
            <div className="mt-5 flex rounded-md shadow-sm w-full mr-8" style={{height:'38px'}}>
                <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300  px-3 text-sm text-gray-500">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </span>
                <input
                    onChange={e => setSearchValue(e.target.value)}
                    type="text"
                    name="company-website"
                    id="company-website"
                    className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm border pl-2"
                    placeholder=" Search Country Name"
                    value={searchValue}
                 />
            </div>
        </div>
      </>
    )
}
export default Search;