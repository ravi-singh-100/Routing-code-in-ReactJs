
import { json ,redirect,useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem'
const EventsDetail=()=>{
const data=useRouteLoaderData('event-detail');
return (
  <EventItem event={data.event}/>
)
}
export default EventsDetail;

export async function loader({request,params}){
    const id=params.eventId;
   const response= await fetch('http://localhost:8080/events/'+id);
   if(!response.ok){
throw json({message:'Could not fetch the details for the requested items'},{status:500})
   }
   else{
    return response;
   }
}
export async function action({params,request}){
const eventId=params.eventId;
const response=await fetch('http://localhost:8080/events/'+eventId,{
   method:request.method
});
if(!response.ok){
   throw json({message:'Could not delete the event'},{status:500})
      }
      return redirect('/events')
}