import './App.css';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {

  const books = [
    { id: 101, bname: "Master React", price: 670 },
    { id: 102, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 103, bname: "Mongo Essentials", price: 450 }
  ];

  const blogs = [
    {
      id: 1,
      title: "React Learning",
      author: "Stephen Biz",
      description: "Welcome to learning React!"
    },
    {
      id: 2,
      title: "Installation",
      author: "Schwzenider",
      description: "You can install React from npm."
    }
  ];

  const courses = [
    {
      id: 1,
      cname: "Angular",
      date: "4/5/2021"
    },
    {
      id: 2,
      cname: "React",
      date: "6/3/2021"
    }
  ];

  return (
    <div className="container">

      <div className="column">
        <CourseDetails courses={courses} />
      </div>

      <div className="column">
        <BookDetails books={books} />
      </div>

      <div className="column">
        <BlogDetails blogs={blogs} />
      </div>

    </div>
  );
}

export default App;