import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav({ search, setSearch}) {
  return (
    <div className='Nav'>
        <form className='seacrhForm' onSubmit={(e) => e.preventDefault()}>
            <input 
                type="text" 
                id='search'
                placeholder='Seacrh Post'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>

        <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/post'>Posts</Link></li>
            <li><Link to='/About'>About</Link></li>
       </ul>
       
      <h1>nav</h1>
      <button className='login-btn'>
        <Link to='/Login'>Login</Link>
       </button>
       <button className='signUp-btn'>
       <Link to='/SignUp'>Sign-Up</Link>
       </button>
    </div>
  )
}
