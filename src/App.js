import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { MockAPI, PrivateRoute } from './components';
import {
  Login,
  PostFeedPage,
  PostIndividualPage,
  Profile,
  Signup,
} from './features';

function App() {
  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  console.log(theme);
  return (
    <div className='min-h-screen dark:bg-dark-background bg-background'>
      <ToastContainer
        position='bottom-right'
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        theme='colored'
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <PostFeedPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/profile/:userHandler'
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path='/post/:postId'
          element={
            <PrivateRoute>
              <PostIndividualPage />
            </PrivateRoute>
          }
        />
        <Route
          path='/explore'
          element={
            <PrivateRoute>
              <PostFeedPage />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/mockman' element={<MockAPI />} />
      </Routes>
    </div>
  );
}

export default App;
