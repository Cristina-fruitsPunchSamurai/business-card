import React from "react"

export default function Footer() {
    return (
        <footer className="footer">
            <a href="" target="_blank">
                <img src={process.env.PUBLIC_URL + '/images/Twitter.png'} />
                </a>
            <a href="" target="_blank">    
            <img src={process.env.PUBLIC_URL + '/images/Facebook.png'} />
            </a>
            <a href="https://www.instagram.com/crissatrapi/" target="_blank">
            <img src={process.env.PUBLIC_URL + '/images/Instagram.png'} />
            </a>
            <a href="https://github.com/fruitsPunchSamurai-C" target="_blank">
            <img src={process.env.PUBLIC_URL + '/images/GitHub.png'} />
            </a>
        </footer>
    )
}