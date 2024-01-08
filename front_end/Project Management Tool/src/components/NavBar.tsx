import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import pmlogo from './Pm_logo.png';


const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About us", href: "/aboutus", current: false },
  { name: "FAQs", href: "/FAQs", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
 
  return (
    <>
   
      <Disclosure >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8  min-[1800px]:scale-125   ">
            
              {/* <button onClick={handleThemeChange} className="text-black dark:text-white">Theme</button> */}
              <div className="relative flex h-16 items-center justify-between ">
             
                <div className="absolute inset-y-0  flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-200 hover:text-black ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6 " aria-hidden="true" />
                    ) : (
                      <Bars3Icon style={{color :"white"}} className="block h-6 w-6  " aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>



                <div className="flex mt-6 flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  
                  <div className="flex flex-shrink-0 items-center ">
                  <img  src={pmlogo} alt="logo" className=" w-12 drop-shadow-lg bg-gray-50  p-1 rounded-xl " />
                  </div>
                  
                  <div className="hidden flex-1 sm:ml-6 sm:block ">
                    <div className="flex justify-center space-x-7">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          onClick={() => {
                            navigate(item.href);

                            navigation.forEach((item) => {
                              item.current = false;
                            });

                            item.current = true;
                          }}
                          className={classNames(
                            item.current
                              ? "bg-white shadow-md text-black"
                              : "text-gray-100 hover:bg-gray-200 hover:text-black",
                            "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <Disclosure.Panel className="sm:hidden  ">
              <div className="space-y-1 px-2 pb-3 pt-2  ">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    onClick={() => {
                      navigate(item.href);

                      navigation.forEach((item) => {
                        item.current = false;
                      });

                      item.current = true;
                    }}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
