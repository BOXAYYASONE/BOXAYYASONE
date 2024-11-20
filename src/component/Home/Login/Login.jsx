// Import dependencies
import React, { useState } from 'react';

function Login() {
  // Define state for username, password, and error message
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Basic validation
    if (username === 'user' && password === 'password') {
      alert('Login Successful');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2>ເຂ້າສູ້ລະບົບເຖື່ອນ</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>ຊື່ຜູ້ໃຊ້</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>ລະຫັດຜ່ານ</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={styles.error}>{error}</p>}
        <button type="submit" style={styles.button}>ເຂົ້າສູ່ລະບົບ</button>
      </form>
    </div>
  );
}

// Simple styles for the login form
const styles = {
  container: {
    color: '#05ab00 ',
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(5, 171, 0)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
    borderRadius: '4px',
    border: '1px solid #05ab00 ',
  },
  button: {
    padding: '10px',
    backgroundColor: '#05ab00',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

export default Login;
