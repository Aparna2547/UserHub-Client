import React,{useEffect, useState} from "react";
import AddUser from "../../Components/AddUser";
import Api from "../../Services/axios";

const UsersList = () => {
    const [modal,setModal] = useState(false)
    const [users,setUsers] = useState([])

    useEffect(()=>{
      const fetchUsers = async () =>{
        const res = await Api.get('/users')
        console.log(res.data)
        setUsers(res.data)
      }
      fetchUsers()
    },[])
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
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

            {users && users.map((user, index) => (
    <tr key={index} className="bg-white text-gray-800 border-b-2">
        <td className="px-6 py-4">{user.name}</td>
        <td className="px-6 py-4">{user.email}</td>
        <td className="px-6 py-4">{user.mobile}</td>
        <td className="px-6 py-4">{user.role}</td>
        <td className="px-6 py-4">{user.department}</td>
        <td className="px-6 py-4">{new Date(user.dateOfBirth).toDateString()}</td>
        <td className="px-6 py-4">{new Date(user.dateOfJoining).toDateString()}</td>
        <td className="px-6 py-4">
            <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                {user.description}
            </a>
        </td>
    </tr>
))}

            </tbody>
          </table>
        </div>
      <div className="flex justify-end me-5">
        <button className="bg-blue-900 text-white font-medium px-3 py-1" onClick={()=>setModal(true)}>ADD USER</button>
        </div>

      </div>


     {modal && <AddUser setModal={setModal}/>} 
    </>
  );
};

export default UsersList;
