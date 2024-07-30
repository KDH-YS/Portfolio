// 1.로딩페이지
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //상태변수
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);

  useEffect(
    ()=>{
      function increaseCounter(){
        let _counter = loadCounter;
        _counter = _counter+1 ;
        if(_counter>10){
          setIsLoading(false);
          clearInterval(loadTimer);
        }
        setLoadCounter(_counter);
      }
      const loadTimer = setInterval(
      increaseCounter,1000
      );
      return ()=>{
        clearInterval(loadTimer);
      }


    }, [loadCounter]


  );
  

  return (
    <>
    {isLoading? `loading...${loadCounter}`: "loaded"}
    </>
  );
}

export default App;
