import React from "react"


export default function Info() {
    return (
        <div className="info--container">
            <img className="info--photo" src={process.env.PUBLIC_URL + '/images/photo-id-web.jpeg'} />
                <h2 className="info--name">Cristina MENDOZA</h2>
                <h4 className="info--position">Frontend Developer</h4>
                <a href="https://github.com/fruitsPunchSamurai-C" target="_blank" className="link">
                    <p className="info--site">github.com/fruitsPunchSamurai-C</p></a>
                <div className="info--buttons">
                    <button className="info--email"> 
                    <a href="" target="_blank" className="link2"><img className="info--img--email" src="./images/Mail.png" />Email </a></button>
                    <button className="info--linkedin"> 
                    <a href="" target="_blank" className="link"><img className="info--img--linkedin" src="./images/linkedin.png" />LinkedIn </a> </button>
                </div>
        </div>
    )
}