import React from 'react'
import img1 from '../../assets/img/pele.png'

const Service = () => {
  return (
    <div className="service" id='service'>
        <h1>Best Football Players in Brazil</h1>
        <div className="serviceBx">
            <div className="cardbox">
                <img src={img1} alt="" />
                <h1>PELE</h1>
                <p>Pelé is the all-time leading goalscorer for Brazil with 77 goals in 92 games. At club level he is Santos' all-time top goalscorer with 643 goals from 659 games. In a golden era for Santos, he led the club to the 1962 and 1963 Copa Libertadores, and to the 1962 and 1963 Intercontinental Cup.Pelé's electrifying play and penchant for scoring spectacular goals made him a star around the world. He led Brazil to three World Cup football (soccer) championships (1958, 1962, and 1970). He scored 12 goals in World Cup play and tallied more than 1,000 goals in first-class matches.Pelé began playing for Santos at age 15 and the Brazil national team at 16.By the end of his career, Pelé had won three FIFA World Cups with Brazil, the most wins of the World Cup by any player in the world.</p>
            </div>
            
            <div className="cardbox1">
            </div>

            <div className="cardbox2">
            </div>


        </div>
    </div>
    
  )
}

export default Service