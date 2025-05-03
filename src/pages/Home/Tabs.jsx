import React, { useState } from 'react';
import Info from '../Tabs/Info';
import Player from '../Tabs/Player';
import Comments from '../Tabs/Comments';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Info');

    return (
        <div className="w-full lg:w-2/3">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
                <div className="flex overflow-x-auto">
                    <button
                        className={`px-4 sm:px-8 md:px-16 lg:px-36 py-4 font-medium text-lg sm:text-xl md:text-2xl whitespace-nowrap flex-1 relative ${
                            activeTab === 'Info'
                                ? 'text-orange-500 border-b-2 border-orange-500'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab('Info')}
                    >
                        Info
                    </button>
                    <button
                        className={`px-4 sm:px-8 md:px-16 lg:px-36 py-4 font-medium text-lg sm:text-xl md:text-2xl whitespace-nowrap flex-1 relative ${
                            activeTab === 'Player'
                                ? 'text-orange-500 border-b-2 border-orange-500'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab('Player')}
                    >
                        Player
                    </button>
                    <button
                        className={`px-4 sm:px-8 md:px-16 lg:px-36 py-4 font-medium text-lg sm:text-xl md:text-2xl whitespace-nowrap flex-1 relative ${
                            activeTab === 'Comments'
                                ? 'text-orange-500 border-b-2 border-orange-500'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab('Comments')}
                    >
                        Comments
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === 'Info' && <Info />}
                {activeTab === 'Player' && <Player />}
                {activeTab === 'Comments' && <Comments />}
            </div>
        </div>
    );
};

export default Tabs;