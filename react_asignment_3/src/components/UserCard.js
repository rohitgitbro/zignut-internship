import React from "react";

const UserCard = ({ user, onLike, onEdit, onRemove }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden border">

      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`}
        alt={user.name}
        className="w-full px-12 bg-gray-100"
      />
      <div className="px-6 py-4" >
      <h2 className="font-bold text-xl mb-2">{user.name}</h2>
      <p className="text-gray-700 text-base"><span><i className="fa-regular fa-envelope mr-2 size-4"></i></span>{user.email}</p>
      <p className="text-gray-700 text-base"><span><i className="fa-regular fa-address-card mr-2 size-4"></i></span>{user.phone}</p>
      
      <a
        href={`http://${user.website}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-700 text-base"
      >
        <span><i className="fa-solid fa-globe mr-2 size-4"></i></span>{user.website}
      </a>
      </div>

      <div className="grid grid-rows-1 grid-cols-3 justify-items-stretch pt-4 pb-2 border bg-zinc-100">
        <button
          onClick={() => onLike(user.id)}
          className={`text-center py-2 text-sm font-semibold text-gray-700 mb-2 `}
        >
          <i className={` ${user.liked ? "fas" : "far"} fa-heart fa-2xl `} style={{ color: "red" }}></i>

        </button>
        <button
          onClick={() => onEdit(user.id)}
          className="text-center py-2 text-sm font-semibold text-gray-700 mb-2 border-r-2 border-l-2 border-gray"
        >
          <i className="fa-regular fa-pen-to-square fa-2xl text-gray-700 hover:text-blue-700 transition-colors duration-300"></i>
        </button>
        <button
          onClick={() => onRemove(user.id)}
          className="text-center py-2 text-sm font-semibold text-gray-700 mb-2"
        >
           <i class="fa-solid fa-trash fa-2xl text-gray-700 hover:text-blue-700 transition-colors duration-300"></i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
