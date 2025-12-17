import { Link } from "react-router"

const ErrorPage = () => {
    return(
        <>
        <h1>Dagnabbit!</h1>
        <div>It looks like you've found a page that doesn't exist!</div>
        <hr />
        <div>The best I can do is send you back. Click the link below to return to safety</div>
        <Link to="/">home</Link>
        </>
    )
}

export default ErrorPage