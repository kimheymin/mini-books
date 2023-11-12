import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Error from './pages/Error';
import BookList from './pages/BookList';
import MyBook from './pages/MyBook';
import BookDetailModal from './component/BookDetailModal';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />,
    errorElement : <Error />,
    children : [
      {path : '/book/:keyword', element : <BookList />},
      // {path : '/book/detail/id', element : <BookDetailModal />},
      {path : '/book/like', element : <MyBook />},
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>
)
