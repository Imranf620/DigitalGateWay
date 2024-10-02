import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState({ nameError: '', passwordError: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = { nameError: '', passwordError: '' };
    const myData = new FormData(e.target);
    const payLoad = Object.fromEntries(myData);
    console.log(payLoad);
    if (!payLoad.userName.trim()) {
      newErrors.nameError = 'Username is required.';
    } else if (!/(?=.*[A-Z])(?=.*[a-z])(?=.*[1-9])/.test(payLoad.userName)) {
      newErrors.nameError =
        'Username must contain at least one uppercase letter, one lowercase letter, and one number.';
    }

    if (!payLoad.password.trim()) {
      newErrors.passwordError = 'Password is required.';
    } else if (
      payLoad.password.length < 8 ||
      !/[!@#$%^&*]/.test(payLoad.password)
    ) {
      newErrors.passwordError =
        'Password must contain 8 characters and one special character.';
    }

    setError(newErrors);

    if (!newErrors.nameError && !newErrors.passwordError) {
      navigate('/');
    }
  };

  return (
    <section className='max-w-[500px] h-screen mx-auto bg-[#FBFCF7] shadow-2xl flex flex-col items-center justify-center'>
      <main className='w-[90%]'>
        <h1 className='text-3xl text-center mb-4 font-bold'>Login Form</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div>
            <label htmlFor='userName'>
              {error.nameError ? (
                <p className='text-red-500'>{error.nameError}</p>
              ) : (
                'Username'
              )}
            </label>
            <input
              type='text'
              name='userName'
              id='userName'
              placeholder='Username'
              className='flex items-center gap-2 justify-center mt-4 outline-1 rounded-md p-2 w-full text-xl border border-[#9C8F98] text-black'
            />
          </div>
          <div>
            <label htmlFor='password'>
              {error.passwordError ? (
                <p className='text-red-500'>{error.passwordError}</p>
              ) : (
                'Password'
              )}
            </label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
              className='flex items-center gap-2 justify-center mt-4 outline-1 rounded-md p-2 w-full text-xl border border-[#9C8F98] text-black'
            />
          </div>
          <div>
            <button
              type='submit'
              className='flex items-center gap-2 justify-center bg-[#2065D1] rounded-md p-2 w-full text-white text-xl'
            >
              Submit
            </button>
          </div>
        </form>
        <h1 className='mt-8 text-center'>
          Don't have an account? <Link to={'/signup'}>Register</Link>
        </h1>
      </main>
    </section>
  );
};

export default Login;
