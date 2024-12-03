import React, { useEffect, useState } from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import Avatar from "./Avatar";
import { useDispatch, useSelector } from "react-redux";
import EditUserDetails from "./EditUserDetails";
import { FiArrowUpLeft } from "react-icons/fi";
import { FaImage, FaVideo } from "react-icons/fa6";
import SearchUser from "./SearchUser";
import { logout } from "../redux/userSlice";

const Sidebar = () => {
  const user = useSelector((state) => state?.user);
  const [editUserOpen, setEditUserOpen] = useState(false);
  const [allUser, setAllUser] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [openSearchUser, setOpenSearchUser] = useState(false);
  const socketConnection = useSelector(
    (state) => state?.user?.socketConnection
  );

  useEffect(() => {
    if (socketConnection && user?._id) {
      socketConnection.emit("sidebar", user._id);
      socketConnection.on("conversation", (data) => {
        if (Array.isArray(data)) {
          const conversationUserData = data.map((conversationUser, index) => {
            if (
              conversationUser?.sender?._id === conversationUser?.receiver?._id
            ) {
              return {
                ...conversationUser,
                userDetails: conversationUser.sender,
              };
            } else if (conversationUser?.receiver?._id !== user?._id) {
              return {
                ...conversationUser,
                userDetails: conversationUser.receiver,
              };
            } else {
              return {
                ...conversationUser,
                userDetails: conversationUser.sender,
              };
            }
          });
          setAllUser(conversationUserData);
        } else {
          console.error("Data is not an array:", data);
          setAllUser([]);
        }
      });
    }
  }, [socketConnection, user]);

  const handleLogout = ()=>{
      dispatch(logout)
      navigate('/email')
      localStorage.clear()
  }

  return (
    <div className="w-full h-full grid grid-cols-[48px,1fr] bg-white">
      <div className="bg-slate-100 text-slate-600 w-12 h-full border rounded-tr-lg rounded-br-lg py-5 flex flex-col justify-between">
        <div>
          <NavLink
            className={({ isActive }) =>
              `w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded ${
                isActive && "bg-slate-200"
              }`
            }
            title="chat"
          >
            <IoChatbubbleEllipses size={20} />
          </NavLink>
          <div
            className="w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded"
            title="add friend"
            onClick={() => setOpenSearchUser(true)}
          >
            <FaUserPlus size={20} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <button
            className="mx-auto my-auto"
            title={user?.name}
            onClick={() => setEditUserOpen(true)}
          >
            <Avatar
              width={30}
              height={30}
              name={user?.name}
              imageUrl={user?.profile_pic}
              userId={user?._id}
            />
          </button>
          <button
            className="w-12 h-12 flex justify-center items-center cursor-pointer hover:bg-slate-200 rounded"
            onClick={handleLogout}
            title="log out"
          >
            <span className="-ml-2 ">
              <BiLogOut size={20} />
            </span>
          </button>
        </div>
      </div>

      <div className="w-full">
        <div className="h-16 flex items-center">
          <h2 className="text-xl font-bold p-4 text-slate-800">Message</h2>
        </div>
        <div className="bg-slate-200 p-[0.5px]"></div>
        <div className="h-[calc(100vh-65px)] overflow-x-hidden overflow-y-auto scrollbar">
          {allUser.length === 0 && (
            <div className="mt-10">
              <div className="flex justify-center items-center my-4 text-slate-500">
                <FiArrowUpLeft size={50} />
              </div>
              <div className="text-lg text-center text-slate-400">
                Explore Users to start a conversation
              </div>
            </div>
          )}
          {allUser.map((conv, index) => {
            return (
              <NavLink
                to={"/" + conv?.userDetails?._id}
                key={conv?._id}
                className="flex items-center gap-4 py-3 px-2 border border-transparent hover:border-primary rounded hover:bg-slate-100 cursor-pointer"
              >
                <div className="h-fit py-1">
                  <Avatar
                    imageUrl={conv?.userDetails?.profile_pic}
                    name={conv?.userDetails?.name}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h3 className="text-ellipsis line-clamp-1 font-semibold text-base">
                    {conv?.userDetails?.name}
                  </h3>
                  <div className="text-slate-600 text-xs flex items-center gap-1">
                    <div className="flex items-center gap-2">
                      {conv?.lastMsg?.imageUrl && (
                        <div className="flex gap-2 items-center">
                          <span className="flex gap-2 items-center">
                            <FaImage />
                            {!conv?.lastMsg?.text && <span>Image</span>}
                          </span>
                        </div>
                      )}
                      {conv?.lastMsg?.videoUrl && (
                        <div className="flex gap-2 items-center">
                          <span className="flex gap-2 items-center">
                            <FaVideo />
                            {!conv?.lastMsg?.text && <span>Video</span>}
                          </span>
                        </div>
                      )}
                    </div>
                    <span className="text-ellipsis line-clamp-1">
                      {conv?.lastMsg?.text}
                    </span>
                  </div>
                </div>
                {Boolean(conv?.unseenMsg) && (
                  <p className="text-xs w-6 h-6 flex justify-center items-center ml-auto p-1 bg-primary text-white font-semibold rounded-full">
                    {conv?.unseenMsg}
                  </p>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* edit user details */}
      {editUserOpen && (
        <EditUserDetails onClose={() => setEditUserOpen(false)} user={user} />
      )}

      {/* search user */}
      {openSearchUser && (
        <SearchUser onClose={() => setOpenSearchUser(false)} />
      )}
    </div>
  );
};

export default Sidebar;
