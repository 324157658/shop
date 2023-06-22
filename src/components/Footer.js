import React from 'react'
import {FaInstagram} from "react-icons/fa";
import {FaTelegram} from "react-icons/fa";



export default function Footer() {
    return (
      <footer >
        <div className='AboutUs'>
          <h1 className='center'> О нас:</h1>
          Books.ru - ваш надежный книжный спутник в мире литературы. В нашем интернет-магазине вы найдете широкий выбор книг на любой вкус - от классики до современных бестселлеров. 
          Мы стремимся сделать ваше путешествие в мир слов простым и удобным, предлагая удобный интерфейс, детальные описания и рекомендации. 
          Присоединяйтесь к нам и откройте новые горизонты чтения с Books.ru!
        </div>
            <ul className='contacts'>
              <li>Контакты:</li>
              <li>+79045033609 </li>
              <li>galybin.99@mail.ru</li>
              <li> < FaInstagram /> <FaTelegram /> </li>
            </ul>    
      </footer>
    )
}
 