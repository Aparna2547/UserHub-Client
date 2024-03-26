import React, { useEffect, useState } from "react";
import AddUser from "../../Components/AddUser";
import Api from "../../Services/axios";
import Pagination from "../../Components/Pagination";
import ProfileCard from "../../Components/ProfileCard";

const UsersList = () => {
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await Api.get(
          `users?search=${searchTerm}&page=${currentPage}`
        );
        console.log(res.data);
        setTotalPages(res.data.totalPages);
        setUsers(res.data.allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, [searchTerm, modal, currentPage]);

  const handleProfileCard = async (index) => {
    setIndex(index);
    setProfile(true);
  };
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="flex justify-end ">
          <div className="pt-2 relative mx-auto text-gray-600 flex justify-end  w-3/4">
            <input
              className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
              <svg
                className="text-gray-600 h-4 w-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 56.966 56.966"
                xmlSpace="preserve"
                width="512px"
                height="512px"
              >
                <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="p-3 flex justify-center items-center rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right rounded-lg drop-shadow-lg text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase border-b-2     bg-white dark:text-gray-900">
              <tr>
                <th scope="col" className="px-6 py-3">
                  User Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Department
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of birth
                </th>
                <th scope="col" className="px-6 py-3">
                  Date of joining
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user, index) => (
                  <tr key={index} className="bg-white text-gray-800 border-b-2">
                    <td className="px-6 py-4">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.mobile}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">{user.department}</td>
                    <td className="px-6 py-4">
                      {new Date(user.dateOfBirth).toDateString()}
                    </td>
                    <td className="px-6 py-4">
                      {new Date(user.dateOfJoining).toDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                        <button
                          className="bg-blue-300 p-2"
                          onClick={() => handleProfileCard(index)}
                        >
                          view
                        </button>
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center me-5">
          <Pagination
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
            currentPage={currentPage}
          />

          <button
            className="bg-blue-900 text-white font-medium px-3 py-1"
            onClick={() => setModal(true)}
          >
            ADD USER
          </button>
        </div>
        {modal && <AddUser setModal={setModal} />}
      </div>
      {profile && (
        <ProfileCard profileDetails={users[index]} setProfile={setProfile} />
      )}
    </>
  );
};

export default UsersList;
