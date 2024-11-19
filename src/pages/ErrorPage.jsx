import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return(
        <>
        <h3>Opps</h3>
        <p>sorry this blank not found</p>
        <p>
            {error.statusText || error.message}
        </p>
        </>
    )
}

export default ErrorPage