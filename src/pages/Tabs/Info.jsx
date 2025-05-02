import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { HiOutlineChartBar } from 'react-icons/hi';
import Events from '../Home/Events';

const Info = () => {
    return (
        <div className="my-6 w-5/5">
            {/* Tags */}
            <div className='flex justify-between'>
                <div className="flex flex-wrap gap-2 my-4">
                    <span className="px-6 py-2 text-xl bg-cyan-100 text-gray-600 rounded-full">Football</span>
                    <span className="px-6 py-2 text-xl bg-cyan-100 text-gray-600 rounded-full">Relay</span>
                    <span className="px-6 py-2 text-xl bg-pink-50 text-pink-800 rounded-full">Female</span>
                    <span className="px-6 py-2 text-xl bg-purple-100 text-purple-800 rounded-full">Age: Below 25</span>
                </div>
                <div className="flex gap-2 justify-between items-center text-xl text-green-600">
                    <HiOutlineChartBar />
                    <h1 className='text-gray-600 text-xl'>Beginner</h1>
                </div>
            </div>

            <div className="divider my-10"></div>


            {/* About Section */}
            <h2 className="text-3xl font-semibold mb-5">About this event</h2>
            <p className="text-gray-700 mb-2 max-w-2xl">
                Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own
                mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get
                into the nuts and bolts of tomorrow's high-rise buildings.
            </p>
            <button className="text-blue-500 text-sm font-medium hover:underline cursor-pointer">Read more</button>

            <div className="divider my-10"></div>

            {/* Location Section */}
            <div className="mt-8 max-w-2xl items-start">
                <h2 className="text-3xl font-semibold mb-5">Location</h2>
                <div className='flex justify-between'>
                    <div className="mb-4">
                        <p className="my-1 text-2xl font-semibold text-gray-600">NDE Field</p>
                        <p className="text-gray-600">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</p>
                    </div>
                    <button className="border border-gray-300 rounded-full btn btn-lg font-medium text-gray-600">Open maps</button>
                </div>
            </div>

            <div className="divider my-10"></div>

            {/* Good to know Section */}
            <div className="mt-8">
                <h2 className="text-3xl font-semibold mb-5">Good to know</h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-4xl">
                    {/* Highlights */}
                    <div className="col-span-2 bg-[#da6049] bg-opacity-90 text-white p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Highlights</h3>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <Calendar className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Mon, 2 Dec</span>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-5 h-5 mr-2 mt-0.5" />
                                <span>7:30 AM - 8:30 AM</span>
                            </div>
                            <div className="flex items-start">
                                <Clock className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Arrive 15 min before start</span>
                            </div>
                            <div className="flex items-start">
                                <MapPin className="w-5 h-5 mr-2 mt-0.5" />
                                <span>Venue booked</span>
                            </div>
                        </div>
                    </div>

                    {/* Refund & cancellation policy */}
                    <div className="col-span-3 bg-[#34735f] text-white p-6 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-4">Refund & cancellation policy</h3>
                        <ul className="list-none space-y-2">
                            <li className="flex items-end">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if host cancels the game</span>
                            </li>
                            <li className="flex items-end">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if you cancel 24+ hours in advance</span>
                            </li>
                            <li className="flex items-end">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if game is cancelled due to low attendance</span>
                            </li>
                        </ul>
                        <div className="mt-4 text-right">
                            <button className="text-sm hover:underline cursor-pointer">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider my-10"></div>

            {/* Hosted by Section */}
            <div className="pb-16">
                <h2 className="text-3xl font-semibold mb-5">Hosted by</h2>
                <div className="bg-gray-600 p-7 rounded-2xl flex items-center justify-between max-w-3xl">
                    <div className="flex items-center">
                        <div className="relative">
                            <img
                                src="/src/assets/alex.png"
                                alt="Alex Mercer"
                                className="w-28 h-28 rounded-full object-cover"
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-2xl font-semibold text-white">Alex Mercer</h3>
                            <p className="text-gray-300">23 activities hosted</p>
                            <div className="flex items-center">
                                <span className="text-gray-300">4.5 host rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <button className="btn btn-lg w-40 bg-[#fde8cd] border-none text-gray-800 rounded-full">Message</button>
                        <button className="btn btn-lg btn-outline hover:bg-transparent w-40 border border-[#fde8cd] text-[#fde8cd] rounded-full">View profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;