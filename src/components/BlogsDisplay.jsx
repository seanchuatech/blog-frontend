import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get('http://localhost:3500/blog'); // Replace with your API URL
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>{post.title}</h3> 
              <p>{post.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BlogPage;
