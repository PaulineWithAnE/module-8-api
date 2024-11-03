import './App.css';
import { useCallback, useEffect, useState } from 'react';

function App() {

    const [advice, setAdvice] = useState('');

    // 1
    // useEffect(() => {
    //     getAdvice();
    // }, [])

    // const getAdvice = async () => {
    //     const response = await fetch(`https://api.adviceslip.com/advice`);
    //     const data = await response.json();
    //     // console.log(data.slip.advice)
    //     setAdvice(data.slip.advice)
    // }

    // 2
    // useEffect(() => {
    //     const getAdvice = async() => {
    //         const response = await fetch(`https://api.adviceslip.com/advice`);
    //         const data = await response.json();
    //         setAdvice(data.slip.advice)
    //     }
    //     getAdvice()
    // }, [])

    // 3

    const getAdvice = useCallback(async () => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice)
    }, [])

    useEffect(() => {
        getAdvice()
    }, [getAdvice])


  return (
      <div className='App'>
        <p>{advice}</p>
      </div>
  )
}

export default App;