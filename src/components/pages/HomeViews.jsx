import { useNavigate, useLocation } from 'react-router-dom';
export default function HomeViews() {
  const navigate = useNavigate();
  console.log(navigate);
  const locat = useLocation();
  console.log(locat);
  return (
    <>
      <h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut illo
        laudantium nulla odit. Ipsum asperiores ratione natus laudantium minima
        totam dolores. Enim repellendus ab id sed quia cumque veniam ratione?
      </h1>
    </>
  );
}
