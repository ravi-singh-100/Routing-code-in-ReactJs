import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";
const ErrorPage=()=>{
    let title='An Error Occured !!!';
    let message='Something went wrong';
    const error=useRouteError();
    if(error.status===500){
        // message=JSON.parse(error.data).message;
        message=error.data.message;
    }
    if(error.status===404){
        title='Page Not Found'
message='Could not find page or Resource'
    }
return (
    <>
    <MainNavigation/>
    <PageContent title={title}>
        <p>{message}</p>
        </PageContent>
        </>
)
}
export default ErrorPage;