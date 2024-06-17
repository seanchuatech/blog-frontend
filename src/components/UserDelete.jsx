import { useNavigate, useParams } from "react-router-dom";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

const UserDelete = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    console.log('working?');
    e.preventDefault();
    const controller = new AbortController();

    try {
      const response = await axiosPrivate.delete(`/user/${id}`, {
        signal: controller.signal
      });
      console.log(response);
      navigate('/dashboard/users');
    } catch (error) {
      console.log('Catch error', error);
    }
    console.log('hello', id);
  }
  return (
    <article>
      <div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Are you sure you want to delete this user?
          </h3>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={handleSubmit}
              >
                Confirm
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-orange-400 hover:bg-orange-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                onClick={() => navigate('/dashboard/users')}
              >
                Cancel
              </button>
            </div>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default UserDelete