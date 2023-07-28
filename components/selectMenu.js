import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SelectMenu({filteredContinents, selected, setSelected}) {
  const [query, setQuery] = useState('')

  const filteredContinent =
    query === ''
      ? filteredContinents
      : filteredContinents.filter((person) => {
            return person.toLowerCase().includes(query.toLowerCase())
        })
  
  return (
    <Combobox value={selected} onChange={setSelected} className="h10">
      {({ open }) => (
        <>
          <Combobox.Label className="block text-sm font-medium text-gray-700 float-left">Continents</Combobox.Label>
          <div className="relative mt-1">
            <div>
                <Combobox.Input onChange={(event) => setQuery(event.target.value)} displayValue={(person) => person} className=" text-center relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"/>
                <Combobox.Button className="absolute inset-y-0 right-0 top-5 flex items-center pr-2">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" ></ChevronUpDownIcon>
                </Combobox.Button>
             </div>
            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredContinent.map((person) => (
                  <Combobox.Option
                    key={person}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {/* <img src={person.flags.png} alt="" className="h-6 w-6 flex-shrink-0 rounded-full" /> */}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {person}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))}
              </Combobox.Options>
            </Transition>
          </div>
        </>
      )}
    </Combobox>
  )
}
