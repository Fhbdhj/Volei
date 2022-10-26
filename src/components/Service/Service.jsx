import React from 'react'
import img1 from '../../assets/img/pele.png'
import img2 from '../../assets/img/kaka.png'
import img3 from '../../assets/img/neymar.png'

const Service = () => {
  return (
    <div className="service" id='service'>
        <h1 className='kik'>Best Football Players in Brazil</h1>
        <div className="serviceBx">
            <div className="cardbox">
                <img src={img1} alt="" />
                <h1>PELE</h1>
                <p>Pelé is the all-time leading goalscorer for Brazil with 77 goals in 92 games. At club level he is Santos' all-time top goalscorer with 643 goals from 659 games. In a golden era for Santos, he led the club to the 1962 and 1963 Copa Libertadores, and to the 1962 and 1963 Intercontinental Cup.Pelé's electrifying play and penchant for scoring spectacular goals made him a star around the world. He led Brazil to three World Cup football (soccer) championships (1958, 1962, and 1970). He scored 12 goals in World Cup play and tallied more than 1,000 goals in first-class matches.Pelé began playing for Santos at age 15 and the Brazil national team at 16.By the end of his career, Pelé had won three FIFA World Cups with Brazil, the most wins of the World Cup by any player in the world.</p>
            </div>
            
            <div className="cardbox1">
            <img src={img2} alt="" />
                <h1>KAKA</h1>
                <p>Kaká, byname of Ricardo Izecson dos Santos Leite, (born April 22, 1982, Brasília, Brazil), Brazilian football (soccer) player who was named the World Player of the Year by the Fédération Internationale de Football Association (FIFA) in 2007.With success at club and international level, he is one of eight players to have won the FIFA World Cup, the UEFA Champions League and the Ballon d'Or. Kaká made his professional club debut at age 18 at São Paulo in Brazil in 2001, and his performances with the club led to him joining Serie A club AC Milan in 2003.In total, Kaka hit 29 goals for Brazil and is among the top 20 scorers in the history of the side.Kaka is one of the most famous player. Kaka ended his international career with 29 goals and 22 assists in the 92 games he played for Brazil.</p>
            </div>

            <div className="cardbox2">
            <img src={img3} alt="" />
                <h1>NEYMAR</h1>
                <p>Neymar da Silva Santos Júnior (born 5 February 1992), known as Neymar, is a Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team. A prolific goalscorer and renowned playmaker, he is regarded as one of the best players in the world.He is an extremely willing front-runner who is putting in a decent shift in most games. Indeed, his overall performance score, per Squawka, puts him second only to Messi at Barca this season. Compared to Ronaldo's Squawka stats, Neymar's are similarly impressive.Neymar Jr. is one of the most skillful dribblers in the history of football. The 30-year-old first burst onto the scene by virtue of his incredible ability to beat defenders with his innovative dribbling ability. The Brazilian forward is constantly looking to take defenders on and beat them.</p>
            </div>


        </div>
    </div>
    
  )
}

export default Service