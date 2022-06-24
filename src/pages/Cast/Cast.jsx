import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Cast/Cast.module.css';
export default function Cast() {
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const [credits, setCredits] = useState();
  const { id } = useParams();

  useEffect(() => {
    movieApi.fetchApiCredits(id).then(setCredits);
  }, [id]);

  return (
    <>
      {credits && (
        <>
          <hr />
          <ul className={s.ul}>
            {credits.data.cast.map(credit => {
              return (
                credit.profile_path && (
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
                )
              );
            })}
          </ul>
        </>
      )}
    </>
  );
}
