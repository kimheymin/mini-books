import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import BookList from './pages/BookList';
import MyBook from './pages/MyBook';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <Error />,
    children : [
      {index : true, element : <BookList />},
      {path : '/book/:id', element : <BookList />},
      {path : '/book/like', element : <MyBook />},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
