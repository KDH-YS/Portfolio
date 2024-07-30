import './Detail.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { useEffect, useState } from 'react';

export function Detail() {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const fetchMovieDetails = async () => {
    try {
      // 영화 상세 정보를 가져오는 API 호출
      const response = await Axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
      console.log(response.data.data.movie);
      setInfo(response.data.data.movie);
    } catch (err) {
      console.error("Error fetching movie details:", err);
      setError(err);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovieDetails();
    }
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!info) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail">
      <img src={info.medium_cover_image} alt={info.title} />
      <h2>{info.title} ({info.year})</h2>
      <p>{info.description_full}</p>
      <ul>
        {info.genres.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}