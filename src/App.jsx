import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes, Link,  useNavigate } from 'react-router-dom';
import {format} from 'date-fns'


function App() {

  const [posts, setPosts] = useState([ 
    {
      id: 1,
      title: "My GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 2,
      title: "My second GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 3,
      title: "My third GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 4,
      title: "My forth GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 5,
      title: "My fift GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 6,
      title: "My sixth GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    {
      id: 7,
      title: "My seventh GogoLive post",
      datetime: "Jully 25, 2023 11:18:23 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias delectus quasi ad, sunt doloremque dolorum asperiores culpa deserunt. Repellat, totam. Iusto amet cum harum perferendis delectus ullam maiores accusantium."
    },
    
  ])

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    const filteredResults = posts.filter(post => ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLocaleLowerCase()));

      setSearchResults(filteredResults.reverse());
  }, [posts, search])


  useEffect(() =>{
    const fetchPosts = async () => {
      try{
        const response = await api.get('/Posts');
        setPosts(response.data);
      }catch(err) {
        if (err.response) {
          // Not in response range
        console.log(err.respone.data);
        console.log(err.response.status);
        console.log(err.response.headers);
        }else {
          console.log(`Error: ${err.message}`);
        }
        
      }
    }

    fetchPosts();
  }, [ ])

  const handleDelete = (id) => {
    const postsList = posts.filter(posts => posts.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost ];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
    <img src="./s" alt="" />

  }

  return (
    <div className='App'>
      <Header title="Mankind4dev!"/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path='/' element={<Home posts={searchResults}/>} />
        <Route exact path='/post' 
          element={<NewPost 
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}

          
        />} /> 
        <Route exact path='/post/:id' element={<PostPage posts={posts} handleDelete={handleDelete}/>} /> 
        <Route exact path='/about' element={<About />} /> 
        <Route exact path='*' element={<Missing />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;









