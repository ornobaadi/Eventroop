import React, { useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { FaEllipsisV } from 'react-icons/fa';

const Comments = () => {
  const [newComment, setNewComment] = useState('');

  const comments = [
    {
      id: 1,
      user: { initials: 'AM', name: 'Alex Mercer' },
      text: "Looking forward to the game! What's the final player count?",
      time: '14 min',
      replies: [
        {
          id: 2,
          user: { initials: 'RK', name: 'Rifat Khan' },
          text: 'missing few players',
          time: '14 min',
        },
        {
          id: 3,
          user: { initials: 'RK', name: 'Rifat Khan' },
          text: 'got any friends?',
          time: '14 min',
        }
      ]
    },
    {
      id: 4,
      user: { initials: 'AM', name: 'Alex Mercer' },
      text: "Looking forward to the game! What's the final player count?",
      time: '14 min',
      replies: []
    },
    {
      id: 5,
      user: { initials: 'AM', name: 'Alex Mercer' },
      text: "Looking forward to the game! What's the final player count?",
      time: '14 min',
      replies: [
        {
          id: 6,
          user: { initials: 'RK', name: 'Rifat Khan' },
          text: 'got any friends?',
          time: '14 min',
        }
      ]
    }
  ];

  const handleSubmit = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      // Add comment logic would go here
      setNewComment('');
    }
  };

  return (
    <div className='py-5 md:py-10'>
      <div className="px-3 sm:px-5 py-4 sm:py-6 bg-white rounded-3xl">
        {comments.map((comment) => (
          <div key={comment.id} className="mb-4">
            {/* Main comment */}
            <div className="bg-[#34735f] rounded-2xl p-3 md:p-4 mb-1">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#fde8cd] flex items-center justify-center text-[#34735f] text-sm md:text-base font-medium">
                    {comment.user.initials}
                  </div>
                  <span className="ml-2 text-base md:text-xl text-[#fde8cd] font-medium">{comment.user.name}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#fde8cd] text-xs md:text-md mr-2">{comment.time}</span>
                  <button className="text-[#fde8cd]">
                    <FaEllipsisV size={12} className="md:w-4 md:h-4" />
                  </button>
                </div>
              </div>
              <p className="text-white text-sm md:text-lg mt-2">{comment.text}</p>
            </div>

            {/* Reply button */}
            <div className="flex ml-2 mb-2 py-1 md:py-2">
              <button className="text-gray-500 text-sm md:text-xl flex items-center">
                <BsArrowReturnRight className="mr-1 md:mr-2" />
                Reply
              </button>
            </div>

            {/* Replies */}
            <div className="relative pl-4 md:pl-8">
              {comment.replies.length > 0 && (
                <div className="absolute left-1 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-gray-300 h-full" />
              )}
              {comment.replies.map((reply) => (
                <div key={reply.id} className="bg-[#f8e3cd] rounded-2xl p-3 md:p-4 mb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#34735f] flex items-center justify-center text-[#f8e3cd] text-sm md:text-base font-medium">
                        {reply.user.initials}
                      </div>
                      <span className="ml-2 text-base md:text-xl text-[#34735f] font-medium">{reply.user.name}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-[#34735f] text-xs md:text-md mr-2">{reply.time}</span>
                      <button className="text-[#34735f]">
                        <FaEllipsisV size={12} className="md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-black text-sm md:text-xl mt-2">{reply.text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Comment input */}
        <div className="mt-6 md:mt-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Write a comment"
              className="w-full py-2 md:py-3 px-3 md:px-4 border border-gray-300 rounded-full bg-white text-gray-700 text-sm md:text-base"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;