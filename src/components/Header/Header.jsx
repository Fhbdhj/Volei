import React from 'react'
import img from '../../assets/img/banner.png'
import img1 from '../../assets/img/logo.png'

const Header = () => {
  return (
    <div className="header" id='home'>
        <div className="nav">
            <div className="navigation container">
                <div className="logo">
                    <img src={img1} alt="" />
                    </div>
                    <div className='menu'>
                        <div className="top-nav">
                        <div className="logo">
                    <h1>Football <span>.</span></h1>
                    </div>
                    </div>
                    <ul className='nav-list'>
                        <li className='nav-item'>
                            <a href="#home" className='nav-link'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#about" className='nav-link'>About</a>
                        </li>                  
                        <li className='nav-item'>
                            <a href="#service" className='nav-link'>Service</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#team" className='nav-link'>Team</a>
                        </li>
                        <li className='nav-item'>
                            <a href="#contact" className='nav-link'>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="desc">
            <h1 className='team'>Seleção Canarinho</h1>
            <p className='tt'>The Brazil national football team, nicknamed Seleção Canarinho, represents Brazil in men's international football and is administered by the Brazilian Football Confederation, the governing body for football in Brazil. They have been a member of FIFA since 1923 and a member of CONMEBOL since 1916.No other country can compare to the great nation of Brazil when it comes to the beautiful game of soccer. Since their entrance as full member of FIFA, or Fédération Internationale de Football Association, in 1923, the country of Brazil has accounted for numerous trophies as well as individual awards for its players (“Brazil”). Brazilian futebol, or soccer, has reached international stardom because of its history consisting of ground breaking teams, revolutionary players, and winning performances in.Brazil is known for the beautiful scenery and its Carnival. It’s also known for its great athletic achievements throughout history. Soccer, also known as “futebol” the national sport, is played by almost every little boy and girl in the streets of their hometowns. Some young children blossom into the great players.</p>
        </div>
        <img src={img} alt="" />
    </div>
  )
}

export default Header