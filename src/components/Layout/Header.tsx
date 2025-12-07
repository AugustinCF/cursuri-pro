import { Fragment } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { Course } from "@/types/course";

interface HeaderProps {
  courses: Course[];
}

export default function Header({ courses }: HeaderProps) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-semibold text-xl text-gray-800 hover:text-gray-600">
            Cursuri Profesionale
          </Link>

          <nav className="flex items-center gap-6">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                Cursuri Disponibile
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-72 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 max-h-96 overflow-y-auto">
                  <div className="p-1">
                    {courses && courses.length > 0 ? (
                      courses.map((course) => (
                        <Menu.Item key={course.id}>
                          {({ active }) => (
                            <Link
                              href={`/${course.slug}`}
                              className={`${
                                active ? "bg-blue-500 text-white" : "text-gray-900"
                              } group flex w-full items-center rounded-md px-3 py-2 text-sm transition-colors`}
                            >
                              <div className="flex flex-col">
                                <span className="font-medium">{course.title}</span>
                                {course.acf.city && (
                                  <span className={`text-xs ${active ? "text-blue-100" : "text-gray-500"}`}>
                                    {course.acf.city}
                                  </span>
                                )}
                              </div>
                            </Link>
                          )}
                        </Menu.Item>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        Nu există cursuri disponibile
                      </div>
                    )}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </nav>
        </div>
      </div>
    </header>
  );
}
