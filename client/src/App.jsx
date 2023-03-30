import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "@/components/Chat";
import Login from "@/components/login"

export default function App() {
  const [user, setUser] = useState(null);
  const [secret, setSecret] = useState(null);
  const isAuth = Boolean(user) && Boolean(secret)
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={
              isAuth ? (
                <Navigate to="/chat" />
              ) : (
                <Login setUser={setUser} setSecret={secret} />
              )
            }
          />
          <Route path="/chat" element={isAuth ? 
            (<Chat user={user} secret={secret} />) 
            :(<Navigate to='/' />)} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
