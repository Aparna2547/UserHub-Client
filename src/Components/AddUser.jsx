import React, { useEffect, useState } from "react";
import Select from "react-select"

const AddUser = ({setModal}) => {
const [formData,setFormData] = useState({
    department:'dfs'
})

const [input,setInput] = useState('')
const [results,setResults] = useState([])
const [dropdown,setDropdown] = useState(false)

const data = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Iceberg Lettuce',
    'Jackfruit',
    'Kiwi',
    'Lemon',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Maanga',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tomato',
    'Ugli Fruit',
    'Victoria Plum',
    'Watermelon',
    'Xigua Melon',
    'Yellow Passionfruit',
    'Zucchini'
 ];

 useEffect(() => {
    if (input.length > 0) {
      const filteredResults = data.filter(item =>
        item.toLowerCase().startsWith(input.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
 }, [input]);   


 const handleDropdown = ()=>{
    console.log('gggg')
    setDropdown(true)
    setResults(data)
 }

    // const departmentOptions = [
    //     { value: 'marketing', label: 'Marketing' },
    //     { value: 'sales', label: 'Sales' },
    //     { value: 'engineering', label: 'Engineering' },
    //     // Add more departments as needed
    //    ];

  return (
    <div
      className="py-12 bg-gray-700  bg-opacity-20 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            ADD USER
          </h1>
          <div className="flex gap-2">
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter name"
            />
            <input
              id="mobile"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter mobile number"
            />
          </div>

          <div>
            <input
              id="email"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter Email"
            />
          </div>

          <div className="flex gap-2">
            <input
              id="dob"
              type="date"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter Date of birth"
            />

            <input
              id="doj"
              type="date"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter joining date"
            />
          </div>

          <div className="flex gap-2">
            {/* <select name="" id="" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border  ">
                <option value="">Select Role</option>
                <option value="">op1</option>
                <option value="">op1</option>
            </select> */}
            <button onClick={handleDropdown}> +</button>
           <div className="block ">
           <input
              id="doj"
              type="text"
              className=" mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter role"
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <div  className="mt-0 border">
            {results.length > 0 || dropdown && (
        <ul className="dropdown-menu">
          {results.map((result, index) => (
            <li key={index} className="p-1" onClick={() => setInput(result)}>
              {result}
            </li>
          ))}
        </ul>
      )}
      </div>
           
            </div> 
            {/* <input
              id="doj"
              type="text"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter joining date"
            /> */}
            
            {/* <select name="" id="" className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border  ">
            <option value="">Select Department</option>
                <option value="">op1</option>
                <option value="">op1</option>
            </select> */}
{/* <Select
className="w-full"
 options={departmentOptions}
 value={departmentOptions.find(option => option.value === formData.department)}
 onChange={(selectedOption) => setFormData({ ...formData, department: selectedOption.value })}
/> */}
          </div>

          <div className="border border-gray-300 p-2">
            <textarea name="" id="" cols="55" rows="5" placeholder="Enter description"></textarea>
          </div>
          <div className="flex items-center justify-start w-full">
            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
              Submit
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onclick={()=>setModal(false)}
            >
              Cancel
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            onclick="modalHandler()"
            aria-label="close modal"
            role="button"
            onClick={()=>setModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-x"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <line x1={18} y1={6} x2={6} y2={18} />
              <line x1={6} y1={6} x2={18} y2={18} />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
