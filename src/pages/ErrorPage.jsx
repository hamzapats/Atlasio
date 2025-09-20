import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

  const error = useRouteError();
  console.log(error);
  
  return (
    <div className="err">
      <h1>So sorry.</h1>
      <h1>Looks like an error occured.</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
      <button>Go back!</button>
      </NavLink>
    </div>
  )
}

export default ErrorPage
