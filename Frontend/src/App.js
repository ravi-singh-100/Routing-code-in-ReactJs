
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import RootLayout from './page/Root';
import HomePage from './page/Home';
import ErrorPage from './page/Error'
import Events,{loader as eventsLoader} from './page/Events';
import EventsDetail ,{loader as eventsDetailLoader,action as eventDetailAction}from './page/Events-detail';
import NewEventPage from './page/New-event';
import EditEvent from './page/Edit-event';
import EventsLayout from './page/EventLayout';
import { action as manipulateNewAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './page/News-letter'

const router=createBrowserRouter([
  {path:'/' ,element:<RootLayout/>, errorElement:<ErrorPage></ErrorPage>,
children:[
  {index:true,element:<HomePage/>},
  {path:'events' ,element:<EventsLayout/>,children:[
    {index:true ,loader:eventsLoader,element:<Events/>},
    {path:':eventId',id:'event-detail' ,loader:eventsDetailLoader,children:[
      {index:true ,element:<EventsDetail/> ,action:eventDetailAction},
       {path:'edit',element:<EditEvent/> ,action:manipulateNewAction},
   
    ]
  },
    {path:'new',element:<NewEventPage/>,action:manipulateNewAction},
   
  ]},
  {
    path: 'newsletter',
    element: <NewsletterPage />,
    action: newsletterAction,
  },
 

]
}

])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
