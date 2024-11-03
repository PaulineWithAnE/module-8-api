import './App.css';
import { useEffect, useState } from 'react';

function App() {

    const [points, setPoints] = useState(1);
    const [title, setTitle] = useState('abc')

    // обычно закладывается вызов API
    // хук, который принимает аргументы (функция - это первый аргумент)
    // отображается сразу при загрузке компонета 
    // второй аргумент - пустой массив, за счет которого предотвращается повторная попытка вызова useEffect
    useEffect(() => {
        console.log('effect')
    }, [title])
    // привязываем useEffect к состоянию, т е при изменении конкретного состояния вызывается useEffect


  return (
      <div className='App'>
        <p>{points}</p>
        <p>{title}</p>
        <button onClick={() => setPoints(points+1)}>get more points</button>
        <button onClick={() => setTitle('def')}>new title</button>
      </div>
  )
}

export default App;