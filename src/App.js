import './App.css';
import { useState } from 'react';

function App() {

  //одно состояние на всю книгу
  // const [book, setBook] = useState ({
  //   title: '1984',
  //   author: 'George Orwell',
  //   year: 1949, 
  //   rating: '4, 5 stars'
  // })

  //Оператор расширение spread operator, сохрание данных массива
  // const updateRating = () => {
  //   setBook({...book,rating: '5 stars'})
  // }


   //вводим три состояния на разные характеристики книги
      const [title, setTitle] = useState('1984');
      const [year, setYear] = useState(1949);
      const [rating, setRating] = useState('4,5 stars');

      const updateRating = () => {
          setRating('5 stars')
        }

  return (
  //  <div className='App'>
  //   <h4>{book.title}</h4>
  //   <h4>{book.author}</h4>
  //   <h4>{book.year}</h4>
  //   <h4>{book.rating}</h4>
  //   <button onClick={updateRating}>update</button>
  //  </div>

      <div className='App'>
        <p>{title}</p>
        <p>{year}</p>
        <p>{rating}</p>

        <button onClick={updateRating}>update</button>
      </div>
  )
}

export default App;
