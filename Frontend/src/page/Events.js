import {json, useLoaderData,defer, Await} from 'react-router-dom';
import EventsList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {
// const data=useLoaderData();
// if(data.isError){
//   return <p>{data.message}</p>
// }
// const events=data.events;
const {events}=useLoaderData();
  return <Suspense fallback={<p style={{textAlign:'centre'}}>Loading.....</p>}>
  <Await resolve={events}>
{/* <EventsList events={events} /> */}

{(loadedData)=><EventsList events={loadedData} />}
</Await>
</Suspense> 
  ;
}

export default EventsPage;

 async function loadEvents(){
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
  // throw new Response(JSON.stringify({message:'Cannot fetcht the data'}),{status:500})
  throw json({message:'Cannot fetch the data'},{status:500})
  } else {
// return response;
const resData=await response.json();
return resData.events;
  }
}
export  function  loader(){
return defer({
  events:loadEvents()
 })
}