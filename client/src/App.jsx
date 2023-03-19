import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Chat from "@/components/Chat";

export default function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
