import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as movieApi from '../../service/FetchApi/FetchApi';
import s from '../Reviews/Reviews.module.css';
export default function Reviews() {
  const [reviews, setReviews] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    movieApi.fetchApiReviews(id).then(setReviews);
  }, [id]);

  if (reviews) {
    if (reviews.data.results && reviews.data.results.length > 0) {
      return (
        <>
          <hr />
          <ul className={s.ul}>
            {reviews.data.results.map(res => (
              <li className={s.li} key={res.id}>
                <p className={s.p}>
                  <b>Author: </b>
                  {res.author}
                </p>
                <p className={s.p}>
                  <b>Date: </b>
                  {res.created_at.slice(0, 10)}
                </p>
                <p className={s.p}>
                  <b>Comment: </b>
                  {res.content}
                </p>
              </li>
            ))}
          </ul>
        </>
      );
    }
    return (
      <>
        <hr />
        <h2 className={s.warning}>No reviews🧐</h2>
      </>
    );
  }
}
