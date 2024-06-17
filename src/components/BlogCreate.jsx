import { useState } from 'react';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate } from 'react-router-dom';

const CREATE_BLOG_URL = '/blog';

const BlogCreate = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axiosPrivate.post(CREATE_BLOG_URL,
        JSON.stringify({ title, description }),
        {headers: { 'Content-Type': 'application/json' }}
      );
      console.log(response.data);
      navigate('/dashboard/blogs');
    } catch (error) {
      console.log('Catch error', error);
    }
  }
  return (
    <form 
      className="max-w-md mx-auto text-slate-900"
      onSubmit={handleSubmit}
    >
      
      <div className="relative z-0 w-full mb-5 group">
        <label
          htmlFor="username"
          className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
        <input
          type="text"
          name="username"
          id="username"
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required=""
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        
      </div>
      
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required=""
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label
            htmlFor="firstname"
            className="peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

      <button
        type="submit"
        className="w-full text-white hover:text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        Create Blog
      </button>
    </form>
  )
}

export default BlogCreate