import { useState, useEffect } from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/blog', {
                    signal: controller.signal
                });
                console.log(response.data);
                isMounted && setBlogs(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            setTimeout(() => {
              controller.abort();
            }, 500); // Delay abort slightly
          }
    }, [])

    return (
        /* 
        <article>
            <h2>Blogs List</h2>
            {blogs?.length
                ? (
                    <ul>
                        {blogs.map((blog) => 
                            <li key={blog?._id}>
                                <h2>{blog?.title}</h2>
                                <p>{blog?.description}</p>
                            </li>)}
                    </ul>
                ) : <p>No blogs to display</p>
            }
        </article>
        */
        <div className="relative overflow-x-auto">
          <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => navigate('/dashboard/blogs/create')}
              >
                Create Blog
              </button>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Blog ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs && blogs.length > 0 ? ( // Correct conditional check
              blogs.map(user => (
                <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-4">{user._id}</td>
                  <td className="px-6 py-4">{user.title}</td>
                  <td className="px-6 py-4">{user.description}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-x-4">
                      <Link to={`/dashboard/blogs/details/${user._id}`}>
                        <BsInfoCircle />
                      </Link>
                      <Link to={`/dashboard/blogs/edit/${user._id}`}>
                        <AiOutlineEdit />
                      </Link>
                      <Link to={`/dashboard/blogs/delete/${user._id}`}>
                        <MdOutlineDelete />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">
                  <p>No users to display</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
};

export default Blogs;