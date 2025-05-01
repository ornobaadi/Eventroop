import React from 'react';
import { Clock, MapPin, Calendar } from 'lucide-react';
import { MdOutlineNetworkCell } from 'react-icons/md';
import { HiOutlineChartBar } from 'react-icons/hi';

const Info = () => {
    return (
        <div className="py-2">
            {/* Tags */}
            <div className='flex justify-between'>
                <div className="flex flex-wrap gap-2 my-6">
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

            <div className="divider "></div>


            {/* About Section */}
            <h2 className="text-3xl font-semibold mb-3">About this event</h2>
            <p className="text-gray-700 mb-2 max-w-2xl">
                Learn about the capital's first beavers in 400 years from the Ealing Beaver project, make your own
                mushroom growing starter kit with urban agriculture experts, before joining Roma the Engineer to get
                into the nuts and bolts of tomorrow's high-rise buildings.
            </p>
            <button className="text-blue-500 text-sm font-medium hover:underline cursor-pointer">Read more</button>

            {/* Location Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-3">Location</h2>
                <div className="mb-4">
                    <p className="font-medium">NDE Field</p>
                    <p className="text-gray-600 text-sm">Jean Baptiste Point du Sable Lake Shore Drive, Chicago, Illinois</p>
                </div>
                <button className="border border-gray-300 rounded-full px-4 py-2 text-sm">Open maps</button>
            </div>

            {/* Good to know Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Good to know</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Highlights */}
                    <div className="bg-red-400 bg-opacity-90 text-white p-6 rounded-lg">
                        <h3 className="font-bold mb-4">Highlights</h3>
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
                    <div className="bg-green-700 text-white p-6 rounded-lg">
                        <h3 className="font-bold mb-4">Refund & cancellation policy</h3>
                        <ul className="list-none space-y-2">
                            <li className="flex items-start">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if host cancels the game</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if you cancel 24+ hours in advance</span>
                            </li>
                            <li className="flex items-start">
                                <div className="min-w-4 mr-2 mt-1.5">•</div>
                                <span>Full refund if game is cancelled due to low attendance</span>
                            </li>
                        </ul>
                        <div className="mt-4 text-right">
                            <button className="text-sm font-medium">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hosted by Section */}
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Hosted by</h2>
                <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="relative">
                            <img
                                src="/api/placeholder/64/64"
                                alt="Alex Mercer"
                                className="w-16 h-16 rounded-full object-cover border-2 border-white"
                            />
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-white">Alex Mercer</h3>
                            <p className="text-gray-300 text-sm">23 activities hosted</p>
                            <div className="flex items-center">
                                <span className="text-yellow-400 text-sm">4.5</span>
                                <span className="text-gray-300 text-sm ml-1">host rating</span>
                            </div>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <button className="bg-white text-gray-800 px-4 py-1 rounded-full text-sm">Message</button>
                        <button className="border border-gray-500 text-white px-4 py-1 rounded-full text-sm">View profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Info;