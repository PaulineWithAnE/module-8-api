import './App.css';
import { useEffect, useState } from 'react';

    function App() {

    const [advice, setAdvice] = useState('');

    useEffect(() => {
        const getAdvice = async() => {
        const response = await fetch(`https://dogapi.dog/api/v2/facts`);
        // const response = await fetch(`https://dogapi.dog/api/v2/breeds`);
        const data = await response.json();
        console.log(data.data[0].attributes.body)
        // console.log(data.data[0].attributes.description)
        }
        getAdvice()
    }, [])

  return (
    <div className='App'>
        <p></p>
    </div>
  )
}

export default App;