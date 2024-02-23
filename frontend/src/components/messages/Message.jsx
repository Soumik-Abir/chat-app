import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              "https://lh3.googleusercontent.com/a/ACg8ocICIHwLFoK91v2h14oQlRMRD3T2-K3Gd6XdoLDXpSWhvsA=s401-c-no"
            }
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500 pb-2`}>Hello</div>
	    <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>10.30</div>
    </div>
  );
};

export default Message;
