import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Blogbody.css'; // Import custom CSS for additional styling if needed

const blogs = [
  {
    imageUrl: 'https://blog.redpocket.com/hubfs/iOS%2014.jpg',
    title: 'What is Tetradic Color Scheme - Everything you need to know',
    date: 'Oct 14, 2024',
    author: 'Nida',
    description: 'Ever wondered  how brands pick the right colors to grab your attention? You might not notice, but brands communicate…',
  },
  {
    imageUrl: 'https://www.shutterstock.com/image-photo/antalya-turkey-september-10-2024-260nw-2514751233.jpg',
    title: 'What is Tetradic Color Scheme - Everything you need to know',
    date: 'Oct 15, 2024',
    author: 'Ayesha',
    description: 'Ever wondered how brands pick the right colors to grab your attention? You might not notice, but brands communicate… ',
  },
  {
    imageUrl: 'https://lifethisway.com/wp-content/uploads/2019/04/Blogging-Devices.jpg',
    title: 'The Future of UI/UX Design',
    date: 'Oct 16, 2024',
    author: 'Ali',
    description: 'Ever wondered how brands pick the right colors to grab your attention? You might not notice, but brands communicate…',
  },
  {
    imageUrl: 'https://lifethisway.com/wp-content/uploads/2019/04/Blogging-Devices.jpg',
    title: 'The Future of UI/UX Design',
    date: 'Oct 16, 2024',
    author: 'Ali',
    description: 'Ever wondered how brands pick the right colors to grab your attention? You might not notice, but brands communicate…',
  },
 
 
 
  // Add more blogs as needed
];

const BlogPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card h-100 shadow-sm">
              <img src={blog.imageUrl} className="card-img-top" alt={blog.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <p className="card-meta text-muted">{blog.date} | {blog.author}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
        {/* <button>View All</button> */}
    </div>
  );
};

export default BlogPage;
