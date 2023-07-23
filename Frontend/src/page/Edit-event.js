
import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
const EditEvent=()=>{
    const data=useRouteLoaderData('event-detail')
    return (
        <>

        <h1>Edit page</h1>
    <EventForm event={data.event} method='patch'/>
    </>
    )
  
}
export default EditEvent;