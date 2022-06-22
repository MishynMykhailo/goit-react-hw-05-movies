import { useEffect } from 'react';
import { useState } from 'react';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Cast/Cast.module.css';
export default function Cast({ movieId }) {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [credits, setCredits] = useState();
  useEffect(() => {
    movieApi.fetchApiCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <>
      {credits && (
        <>
          <hr />
          <ul className={s.ul}>
            {credits.data.cast.map(credit => {
              if (credit.profile_path) {
                return (
                  <li key={credit.credit_id} className={s.li}>
                    <div className={s.cardCast}>
                      <img
                        src={`${BASE_IMAGE_URL}${credit.profile_path}`}
                        alt={`${credit.name}`}
                      />
                      <p className={s.p}>
                        <b>Name:</b> {credit.original_name}
                      </p>
                      <p className={s.p}>
                        <b>Character:</b> {credit.character}
                      </p>
                    </div>
                  </li>
                );
              }
            })}
          </ul>
        </>
      )}
    </>
  );
}
