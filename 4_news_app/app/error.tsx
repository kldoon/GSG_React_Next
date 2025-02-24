'use client';

interface IProps {
  error: Error;
  reset: () => void;
}

const Error = (props: IProps) => {

  return (
    <div>
      <h2>Opps!!! </h2>
      <h3>Something went wrong while processing your request!</h3>
      <p>You can <button onClick={() => props.reset()}>try again</button> or <button onClick={() => window.location.reload()}>refresh the page</button> later.
      </p>
      <p><small>Contact the system administrator and provide the following info: {props.error.message}</small></p>
    </div>
  )
}

export default Error