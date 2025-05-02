import React from 'react';
import { FaUsers } from 'react-icons/fa';

const Player = () => {
  const players = [
    { initials: 'AM', name: 'Alex Mercer', role: '(Host)' },
    { initials: 'JU', name: 'Jamir Uddin', role: '' },
    { initials: 'BA', name: 'Biplu Ahmed', role: '' },
    { initials: 'TB', name: 'Topu Barman', role: '' },
    { initials: 'RH', name: 'Rakib Hossain', role: '' },
  ];

  return (
    <div className="py-8 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Players</h2>
        <span className="text-gray-800 text-2xl flex items-center gap-2">
          <FaUsers className='' /> 5/11
        </span>
      </div>
      {players.map((player, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-[#34735f] text-[#34735f] rounded-2xl p-4 mb-2"
        >
          <div className="flex items-center">
            <span className="w-12 h-12 bg-[#fde8cd] font-medium rounded-full flex items-center justify-center mr-2">
              {player.initials}
            </span>
            <div className="flex items-baseline">
              <span className="text-xl ml-1 text-[#fde8cd]">{player.name}</span>
              {player.role && (
                <span className="text-sm text-[#d1c2a3] ml-1">{player.role}</span>
              )}
            </div>
          </div>
          <button className="bg-white text-gray-800 font-medium text-lg btn py-6 rounded-xl">Message</button>
        </div>
      ))}
    </div>
  );
};

export default Player;