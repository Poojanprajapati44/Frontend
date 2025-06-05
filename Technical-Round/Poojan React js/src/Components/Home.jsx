import React, { useEffect, useState } from 'react';
import postsData from './posts.json'; // Import JSON file
// import './App.css';

const Home = () => {
  const [posts, setPosts] = useState([]); // All posts
  const [searchTerm, setSearchTerm] = useState(''); // Search input
  const [currentPage, setCurrentPage] = useState(1); // Current page number
  const postsPerPage = 9; // Number of posts to display per page

  // Load the posts from JSON file on first render
  useEffect(() => {
    setPosts(postsData);
  }, []);

  // Filter posts based on search input
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.join(' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate indices for slicing the posts based on current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Move to next page
  const goToNextPage = () => {
    if (indexOfLastPost < filteredPosts.length) {
      setCurrentPage(prev => prev + 1);
    }
  };

  // Move to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="app">
      {/* Header with title and search bar */}
      <header className="header">
        <h1>React Blog App</h1>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchTerm} // Input field value
            onChange={e => {
              setSearchTerm(e.target.value); // Update value on type
              setCurrentPage(1); // Reset to first page when searching
            }}
            // className="search-input"
          />

          {searchTerm && (
            <button
              className="cancel-button"
              onClick={() => setSearchTerm('')} // Clear the input on click
            >
              Cancle
            </button>
          )}
        </div>
      </header>

      {/* Display filtered posts for the current page */}
      <div className="post-list">
        {currentPosts.map(post => (
          <div className="post-card" key={post.id}>
            
            <h2 className="post-title">{post.title}</h2>  {/* Post title */}

            <p className="post-description">{post.body.substring(0, 100)}...</p>   {/* Short summary first 100 characters of post body */}

            {/* Tags for the post */}
            <div className="post-tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>

            {/* Author name with clickable email */}
            <p className="post-author">
              Author: <a href={`mailto:${post.author.email}`}>{post.author.name}</a>
            </p>
          </div>
        ))}
      </div>

      
      <div className="pagination">    {/* Pagination Controls */}
        {/* Previous page button */}
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Current page indicator */}  
        <span>Page {currentPage}</span>

        {/* Next page button */}
        <button
          onClick={goToNextPage}
          disabled={indexOfLastPost >= filteredPosts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;
