import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const BlogEdit = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const getBlog = async () => {
      try {
        const response = await axiosPrivate.get(`/blog/${id}`, {
          signal: controller.signal
        });
        setTitle(response.data.title);
        setDescription(response.data.description);
      } catch (error) {
        console.error(error);
      }
    }

    getBlog();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.put(`/blog/${id}`,
        JSON.stringify({ title, description }),
        {headers: { 'Content-Type': 'application/json' }}
      );
      console.log(response);
      navigate(-1);
    } catch (error) {
      console.log('Catch error', error);
    }
    console.log('hello', id);
  }

  return (
    <form 
      className="max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      
      <div className="relative z-0 w-full mb-5 group">
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
        <label
          htmlFor="username"
          className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Title
        </label>
      </div>
      
      <div className="grid md:grid-cols-2 md:gap-6">
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
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full text-white hover:text-white bg-slate-600 hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800"
      >
        Update
      </button>
    </form>
  )
}

export default BlogEdit