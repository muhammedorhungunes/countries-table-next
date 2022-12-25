import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function CountryDetail(props) {
  return (
    <div className="overflow-hidden bg-gray-50 shadow sm:rounded-lg m-20">
      <div className="px-4 py-5 sm:px-6">
        
        <div className='flex flex-row w-full'>
            <div className='basis-1/4'>
                <h3 className="text-lg font-medium leading-6 text-gray-900">{props?.selectedCountry[0]?.name?.official ? props.selectedCountry[0].name.official : ''}</h3>
                <p className="mt-1 ">{props?.selectedCountry[0]?.flag  ? props.selectedCountry[0].flag : ''}</p>
            </div>
                <div className='basis-1/4'></div>
                <div className='basis-1/4'></div>
            <div className='basis-1/4'>
                {props?.selectedCountry[0]?.flags?.svg ? 
                <img className="mt-1 w-1/2 float-right" src={props.selectedCountry[0].flags.svg}></img>
                :
                <div></div>
                }
            </div>
        </div>
     
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.name?.official ? props.selectedCountry[0].name.official:''}</dd>
          </div>
          {
            props?.selectedCountry[0]?.languages ? 
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Languages</dt>
            {Object.keys(props?.selectedCountry[0]?.languages)?.map((key,index) => {
              if(props.selectedCountry[0].languages[key]) 
                return <dd className="mt-1 text-sm text-gray-900 sm:col-span-1 sm:mt-0" key={key}>{props.selectedCountry[0].languages[key]}</dd>
              return <div key={index}></div>
            })}
          </div>
          :
          <div></div>
          }
          {
          props?.selectedCountry[0]?.capital ? 
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Capital</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.capital[0] ? props.selectedCountry[0].capital[0] : ''}</dd>
          </div>
          :
          <div></div>
          }
           
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Flag</dt>
            <img className="w-1/4" src={props?.selectedCountry[0]?.flags?.svg ? props.selectedCountry[0].flags.svg : '' }></img>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Coat of arms</dt>
            <img className="w-1/4" src={props?.selectedCountry[0]?.coatOfArms?.png ? props.selectedCountry[0].coatOfArms.png : ''}></img>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Area</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.area ? props.selectedCountry[0].area : ''}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Population</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.population ? props.selectedCountry[0].population : ''}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Continent</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.continents[0] ? props.selectedCountry[0].continents[0] : ''}</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Independent</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{props?.selectedCountry[0]?.independent ? 'Independent':'Not Independent'}</dd>
          </div> 
          {
            props?.selectedCountry[0]?.currencies ?
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Currencies</dt>
            {Object.keys(props?.selectedCountry[0]?.currencies)?.map(key => {
              if(props?.selectedCountry[0]?.currencies[key]?.name)
                return <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0" key={key}>{props.selectedCountry[0].currencies[key].name} ({props.selectedCountry[0].currencies[key].symbol})</dd>
              return <div key={index}></div>  
            })}   
          </div> 
          : 
          <div></div>

          } 
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Maps</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Google maps</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href={props?.selectedCountry[0]?.maps?.googleMaps ? props.selectedCountry[0].maps.googleMaps : ''} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Go
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Open street maps</span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href={props?.selectedCountry[0]?.maps?.openStreetMaps ? props.selectedCountry[0].maps.openStreetMaps : ''} className="font-medium text-indigo-600 hover:text-indigo-500">
                      Go
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}