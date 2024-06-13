import React, { useState } from 'react';

const Signin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const [users,setusers]=useState([])
  const handleSignin = async () => {
    try {
      const response = await fetch('https://furni-flex-4-yx74.onrender.com/')//, {
        // method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        // body: JSON.stringify({ username, userpassword: password }),
        
      // });
      console.log(response.data);

      if (response.ok) {
        alert('Signin successful');
        // Optionally, you can redirect to another page after successful signin
      } else {
        const data = await response.json();
        alert(data.error || 'Signin failed');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Signin failed');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleSignin}>Sign In</button>
    </div>
  );
};

export default Signin;
