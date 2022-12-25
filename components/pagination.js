import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import { useSelector, useDispatch } from 'react-redux';
import {
    decrement,
    increment,
    selectPaginate,
    set
  } from './paginateSlice';

export default function Pagination({countriesPerPage,totalCountries}) {
  const currentPage = useSelector(selectPaginate);
  const dispatch = useDispatch();
  
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
        onClick={() => {
          if(currentPage !== 1)
            dispatch(decrement())
        }}
          // href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
         onClick={() => {
          if(currentPage !== pageNumbers.length)
            dispatch(increment());
        }}
          // href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{" "}{currentPage * countriesPerPage - 10}{" "}</span> to <span className="font-medium">{currentPage * countriesPerPage}</span> of{' '}
            <span className="font-medium">{totalCountries}</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              key="Previous"
              onClick={() => {
                if(currentPage !== 1)
                  dispatch(decrement())
              }}
              href="#"
              className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {pageNumbers.map((number) => (
              currentPage === 1  ? 
              <a
              key={number}
              href="#"
              aria-current="page"
              className={currentPage === number? 
                "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" 
                :
                currentPage + 5 > number  ? 
                "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" 
                :
                "relative hidden z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              }
              onClick={() => {
                dispatch(set(number));
              }}
            >
              {number}
            </a>
            :
            currentPage === 2 ? 
            <a
              key={number}
              href="#"
              aria-current="page"
              className={currentPage === number? 
                "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" 
                :
                currentPage + 4 > number  ? 
                "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" 
                :
                "relative hidden z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              }
              onClick={() => {
                dispatch(set(number));
              }}
            >
              {number}
            </a> 
            :
            currentPage === pageNumbers.length ?
            <a
              key={number}
              href="#"
              aria-current="page"
              className={currentPage === number? 
                "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" 
                :
                currentPage - 5 < number  ? 
                "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" 
                :
                "relative hidden z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              }
              onClick={() => {
                dispatch(set(number));
              }}
            >
              {number}
            </a>
            :
            currentPage === pageNumbers.length -1 ?
            <a
            key={number}
            href="#"
            aria-current="page"
            className={currentPage === number? 
              "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" 
              :
              currentPage - 4 < number  ? 
              "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" 
              :
              "relative hidden z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
            }
            onClick={() => {
              dispatch(set(number));
            }}
          >
            {number}
          </a>
          :
              <a
              key={number}
              href="#"
              aria-current="page"
              className={currentPage === number? 
                "relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20" 
                :
                currentPage + 3 > number && currentPage - 3 < number ? 
                "relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" 
                :
                "relative hidden z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20"
              }
              onClick={() => {
                dispatch(set(number));
              }}
            >
              {number}
            </a> 
            ))}
            <a
            key="Next"
            onClick={() => {
              if(currentPage !== pageNumbers.length)
                dispatch(increment());
            }}
              href="#"
              className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}