import React,{useState} from "react";
import AddUser from "../../Components/AddUser";

const UsersList = () => {
    const [modal,setModal] = useState(false)
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
              <tr className="bg-white text-gray-800 border-b-2 ">
              
                <td className="px-6 py-4 ">trt</td>
                <td className="px-6 py-4">trt</td>
                <td className="px-6 py-4">trt</td>
                <td className="px-6 py-4">trt</td>
                <td className="px-6 py-4">trt</td>
                <td className="px-6 py-4">trt</td>
                <td className="px-6 py-4">tesss</td>
                <td className="px-6 py-4">
                  <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    test
                  </a>
                </td>
              </tr>
              <tr className="bg-white text-gray-800 border-b-2 ">
              
              <td className="px-6 py-4 ">trt</td>
              <td className="px-6 py-4">trt</td>
              <td className="px-6 py-4">trt</td>
              <td className="px-6 py-4">trt</td>
              <td className="px-6 py-4">trt</td>
              <td className="px-6 py-4">trt</td>
              <td className="px-6 py-4">tesss</td>
              <td className="px-6 py-4">
                <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                  test
                </a>
              </td>
            </tr>

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
