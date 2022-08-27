import Iframe from 'react-iframe';
const TrailerList = ({ trailerKey }) => {
  return (
    <>
      <div className="Iframe">
        <Iframe
          url={`https://www.youtube.com/embed/${trailerKey}`}
          width="100%"
          height="300px"
          allow="fullscreen"
        />
      </div>
    </>
  );
};
export default TrailerList;
