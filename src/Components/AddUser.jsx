import React, { useEffect, useState } from "react";
import Error from "./Error";
import Api from "../Services/axios";


const AddUser = ({ setModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    email:'',
    mobile:'',
    dateOfBirth:'',
    dateOfJoining:'',
    department:'',
    description:'',
    role: "",

  });
  const [data,setData] = useState([])
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    const fetchDepartments = async()=>{
      const response  = await Api.get('/departments')
    console.log('helo',response.data[0].department);
    setData(response.data[0].department)
    }
    fetchDepartments()
  },[])


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("formdata", formData);

    // Frontend validation
    const errors = {};

    if (formData.name.trim().length <= 2) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.mobile) {
      errors.mobile = "Mobile number is required";
    } else if (!/^[789]\d{9}$/.test(formData.mobile)) {
      errors.mobile = "Mobile number is invalid";
    }

    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Enter date of birth";
    }

    if (!formData.dateOfJoining) {
      errors.dateOfJoining = "Enter date of joining";
    }

    if (!formData.description) {
      errors.description = "Enter description";
    }

    // Update state with errors if any
    if (Object.keys(errors).length > 0) {
      console.log('inside er')
      setErrors(errors);
      return;
    }

    try {
       const response = await Api.post('/addUser', formData);
       console.log(response)
       setModal(false)
    } catch (error) {
       if (error.response && error.response.data && error.response.data.errors) {
         setErrors(error.response.data.errors);
       } else {
         // Handle other errors, e.g., network issues
         console.error('An error occurred:', error);
       }
    }
  };

  //
  const handleInputChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (formData.department.length > 0) {
      const filteredResults = data.filter((item) =>
        item.toLowerCase().startsWith(formData.department.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [formData.department]);

  return (
    <div
      className="py-12 bg-gray-700  bg-opacity-20 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
      id="modal"
    >
      <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400"
        >
          <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
            ADD USER
          </h1>
          <div className="flex gap-2 w-full">
            <div className="w-full">
              <input
                id="name"
                name="name"
                className="  mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <Error error={errors.name} />}
            </div>
            <div className="w-full">
              <input
                id="mobile"
                type="number"
                name="mobile"
                className=" mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              {errors.mobile && <Error error={errors.mobile} />}
            </div>
          </div>

          <div>
            <input
              id="email"
              name="email"
              className=" mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <Error error={errors.email} />}
          </div>

          <div className="flex gap-2 mt-2">
            <div className="w-full">
              <label htmlFor="">Date of birth</label>
              <input
                id="dob"
                name="dateOfBirth"
                type="date"
                className="  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter Date of birth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />

              {errors.dateOfBirth && <Error error={errors.dateOfBirth} />}
            </div>
            <div className="w-full">
              <label htmlFor="">Enter joining date</label>
              <input
                id="doj"
                name="dateOfJoining"
                type="date"
                className="  text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter joining date"
                value={formData.dateOfJoining}
                onChange={handleInputChange}
              />
              {errors.dateOfJoining && <Error error={errors.dateOfJoining} />}
            </div>
          </div>

          <div className="flex gap-2">
            <div className="block w-full">
          <div className="w-full">
          <input
                id="department"
                name="department"
                type="text"
                className=" mt-2   text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="Enter department"
                value={formData.department}
                onChange={handleInputChange}
              />
              <div className="mt-0 border">
                {results.length > 0 && (
                  <ul className="dropdown-menu">
                    {results.map((result, index) => (
                      <li
                        key={index}
                        className="p-1"
                        onClick={() =>
                          setFormData({ ...formData, department: result })
                        }
                      >
                        {result}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            {errors.department && <Error error={errors.department} />}

          </div>
            </div>

              <div className="w-full">
                <select name="role" id="" value={formData.role} onChange={handleInputChange} className=" mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border">
                  <option value="developer">developer</option>
                  <option value="debbuging">Debugging</option>
                  <option value="tester">Tester</option>
                  <option value="designer">Designer</option>
                </select>
              </div>
            {errors.role && <Error error={errors.role} />}

          </div>

          <div className="border border-gray-300 p-2 mt-2">
            <textarea
              name="description"
              id=""
              cols="55"
              rows="5"
              placeholder="Enter description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
              {errors.description && <Error error={errors.description} />}

          </div>
          <div className="flex items-center justify-start w-full">
            <button
              type="submit"
              className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
            >
              Submit
            </button>
            <button
              className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
              onclick={() => setModal(false)}
            >
              Cancel
            </button>
          </div>
          <button
            className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
            aria-label="close modal"
            role="button"
            onClick={() => setModal(false)}
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
        </form>
      </div>
    </div>
  );
};

export default AddUser;
