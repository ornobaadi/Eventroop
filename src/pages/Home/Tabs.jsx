import React, { useState } from 'react';
import Info from '../Tabs/Info';
import Player from '../Tabs/Player';
import Comments from '../Tabs/Comments';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Info');

    return (
        <div className="w-2/3">
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
                <div className="flex">
                    <button
                        className={`px-40 py-4 font-medium text-2xl relative ${activeTab === 'Info'
                                ? 'text-orange-500 border-b-3 border-orange-500'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab('Info')}
                    >
                        Info
                    </button>
                    <button
                        className={`px-40 py-4 font-medium text-2xl relative ${activeTab === 'Player'
                                ? 'text-orange-500 border-b-3 border-orange-500'
                                : 'text-gray-700 hover:text-gray-900'
                            }`}
                        onClick={() => setActiveTab('Player')}
                    >
                        Player
                    </button>
                    <button
                        className={`px-40 py-4 font-medium text-2xl relative ${activeTab === 'Comments'
                                ? 'text-orange-500 border-b-3 border-orange-500'
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