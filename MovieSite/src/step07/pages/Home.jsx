// 2.Json파일 읽어오기
//npm install axios
// 목록주소
// https://yts.mx/api/v2/list_movies.json
// https://yts-proxy.now.sh/list_movies.json
// 상세보기주소
// https://yts.mx/api/v2/movie_details.json?movie_id=11
// https://yts-proxy.now.sh/movie_detail.json?movie_id=11
import { useState, useEffect } from 'react';
import Axios  from 'axios';
import { Movie } from '../components/Movie';
export function Home() {
  //상태변수
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  const [movies,setMovies] = useState(null);

  const fetchMovies = async ()=>{
    const response = await Axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    console.log(response.data.data.movies);
    setMovies(response.data.data.movies);
    setIsLoading(false);
  }
  useEffect(
    ()=>{
      console.log('useEffect발생');
      fetchMovies();
    }, [loadCounter]


  );

  function displayMovies(){
    return(
    <>
    <h1>movie List1</h1>
    <ul className='movies'>
      {
        movies.map(item=>{
          return (
            <Movie
            key={item.id}
            id={item.id}
            year={item.year}
            title={item.title}
            summary={item.summary}
            poster={item.medium_cover_image}
            genres={item.genres}
            />
          );


        })
      }
    </ul>
    </>
    )
  }
  

  return (
    <>
    {isLoading? `loading...${loadCounter}`: displayMovies()}
    </>
  );
}

