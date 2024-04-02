import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import Login from './screens/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counterSlice';
import ProfileScreen from './screens/ProfileScreen';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));
      }else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);


  return (
    <div className='App'>
      <Router>
        {!user ? (<Login />) : (
          <Routes>
        <Route exact path="/" element={<HomeScreen />}></Route>
        <Route exact path="/profile" element={<ProfileScreen />}></Route>

      </Routes>
        )}
    </Router>
    </div>
  );
}

export default App;