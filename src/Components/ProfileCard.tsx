import React from "react";
import { IoMdClose } from "react-icons/io";

const ProfileCard = ({ profileDetails, setProfile }) => {
  console.log(profileDetails);
  return (
    <div
      className="py-12 bg-gray-700  bg-opacity-20 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div className="h-screen dark:bg-gray-700 bg-gray-200 pt-12">
        {/* Card start */}
        <div className="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg p-2">
          <div className="border-b px-4 pb-6">
            <div className="text-center my-4 ">
              <div className="py-2">
                <h3 className="font-bold text-2xl text-gray-800 dark:text-white mb-1">
                  {profileDetails.name}
                </h3>
                <div className="inline-flex text-gray-700 dark:text-gray-300 items-center">
                  {profileDetails.role} | {profileDetails.department}
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex gap-2 items-center text-center w-full text-gray-800 dark:text-gray-300 mb-4">
              <p className=" text-center">{profileDetails.description}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-2 ">
          <p
            className="p-2 bg-white text-black rounded-lg cursor-pointer"
            onClick={() => setProfile(false)}
          >
            <IoMdClose />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
