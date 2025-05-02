import { MoreVertical } from 'lucide-react';
import { FaHeart } from 'react-icons/fa';
import { RiShare2Line } from 'react-icons/ri';


export default function FootballBanner() {
    return (
        <>
            <div className="py-6">
                <div className="flex flex-col md:flex-row gap-3">
                    {/* Left side main image */}
                    <div className="relative w-full  md:w-2/3 aspect-5/2 overflow-hidden rounded-4xl">
                        <img
                            src="/src/assets/banner/banner-hd.jpg"
                            alt="Football match night view"
                            className="w-full h-full object-cover"
                        />

                        {/* Carousel Dots */}
                        <div className="absolute bottom-4  left-1/2 transform -translate-x-1/2 flex gap-2">
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/40 rounded-full"></span>
                            <span className="w-2 h-2 bg-white/90 rounded-full"></span>
                        </div>
                    </div>


                    {/* Right side thumbnails */}
                    <div className="w-full md:w-1/3 flex flex-col gap-4">
                        <div className="h-1/2 aspect-5/2 overflow-hidden rounded-4xl">
                            <img
                                src="/src/assets/banner/banner-hd.jpg"
                                alt="Thumbnail 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-1/2 aspect-5/2 overflow-hidden rounded-4xl relative">
                            <img
                                src="/src/assets/banner/banner-hd.jpg"
                                alt="Thumbnail 2"
                                className="w-full h-full object-cover "
                            />
                            {/* Optional overlay for "+2 photos" */}
                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center rounded-4xl">
                                <span className="text-white text-3xl font-semibold">+2 photos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-start gap-6 mt-5">
                {/* Event Info */}
                <div className='w-3/5'>
                    <h2 className="text-2xl md:text-6xl font-bold text-gray-900">
                        Road to the Football Finals
                    </h2>
                    <p className="text-gray-600 text-2xl mt-3">Bashundhara Sports Complex</p>
                    <p className="text-gray-600 text-2xl mt-2">Mar 14 from 7:30 PM - 9:30 PM</p>
                </div>

                {/* Action Icons */}
                <div className="w-1/6 flex gap-5 md:ml-auto">
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                        <RiShare2Line className="w-6 h-6 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 bg-white hover:bg-gray-100">
                        <FaHeart className="w-4 h-4 text-gray-600" />
                    </button>
                    <button className="w-10 h-10 flex items-center justify-center">
                        <MoreVertical className="w-7 h-7 text-gray-600" />
                    </button>
                </div>

                {/* Join Event Card */}
                <div className="bg-white rounded-3xl w-full md:w-1/3 shadow-sm px-5 py-5 flex flex-col items-center space-y-4">
                    {/* Price and spots info */}
                    <div className="flex justify-between items-center w-full my-3 p-5 rounded-xl border border-gray-200">
                        <h1 className="text-red-500 text-xl font-medium">6 spots left</h1>
                        <h1 className="text-gray-900 text-xl font-semibold">
                            320tk /player<span className="text-gray-500 text-sm font-normal"> (both)</span>
                        </h1>
                    </div>

                    {/* CTA Button */}
                    <button className="w-full bg-[#63cfa0] hover:bg-emerald-500 text-xl text-black font-semibold py-5 my-3 rounded-full transition">
                        Join event
                    </button>
                </div>

            </div>
        </>
    );
}
