import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
  return (
    <Spinner animation="grow" role="status" variant="success">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
