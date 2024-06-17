import { useNavigate, Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from "./NavBar";

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }

    useEffect(() => {
        const fetchBlogPosts = async () => {
          try {
            const response = await axios.get('http://localhost:3500/display-blog'); // Replace with your API URL
            setPosts(response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
            setError('Failed to fetch blog posts.');
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlogPosts();
      }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <>
            <NavBar />
            <section>
                <div>
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ul>
                        {posts.map((post) => (
                            <li key={post._id}>
                                <div className="flex flex-col justify-center items-center gap-2 border-2 rounded-md m-2">
                                    <h3 className="text-base">{post.title}</h3> 
                                    <p className="text-sm">{post.description}</p>
                                </div>
                                
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    )
}

export default Home