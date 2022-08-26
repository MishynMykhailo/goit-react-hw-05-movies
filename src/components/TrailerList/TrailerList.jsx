import { Fragment } from 'react';
import Iframe from 'react-iframe';
const TrailerList = ({ trailerKey, id }) => {
  return (
    <>
      <Fragment>
        <div className="Iframe">
          <Iframe
            url={`https://www.youtube.com/embed/${trailerKey}`}
            width="100%"
            height="300px"
            allow="fullscreen"
          />
        </div>
      </Fragment>
    </>
  );
};
export default TrailerList;
