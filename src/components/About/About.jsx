import React, { useState } from 'react'
import category from './category'

const About = () => {

   const [data, setData] = useState(category);

  return (
    <div className="about" id='about'>
        <h1 className='hik'>Brazil World Cup Teams History</h1>
        <div className="cardBx">

            {data.map((values) =>{
                const {id, title, year, venue, image} = values;

                return (
                    <>
                        <div className="card" key={id}>
                            <img src={image} alt="" />
                            <div className="content">
                               <h4>{title}</h4>
                                <p>{year}</p><br/>
                                <p>{venue}</p><br/>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default About