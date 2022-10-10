import './App.css';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Blog from './components/Blog/Blog';
import Statistics from './components/Statistics/Statistics';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Quizes from './components/Quizes/Quizes';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
       {
        path: '/',
        loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>
       },
       {
        path: 'topic/:topicId',
        loader: ({params}) => {
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
        element: <Quizes></Quizes>
       },
       {
        path: 'blog',
        element: <Blog></Blog>
       },
       {
        path: 'statistics',
        element: <Statistics></Statistics>
       } 
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
