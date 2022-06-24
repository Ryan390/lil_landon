import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [footer_links, setFooterLinksData] = useState([])

    useEffect(() => {
        loadFooterData();
    }, []);

    const loadFooterData = async () => {
        const response = await fetch('https://h1jk1z1fy3.execute-api.eu-west-1.amazonaws.com/Production/footerLinks');
        let jsonData = await response.json();

        setFooterLinksData(jsonData)
    }
    
    return (
        <footer className="scene">
            <article className="content">
                <div id="socialmedia">
                    <ul className="group">
                        {
                            footer_links.map((link) =>
                                <li><a href={link.href}><img className={link.class} src={link.src} alt={link.alt} /></a></li>
                            )
                        }
                    </ul>
                </div>
            </article>
        </footer>
    )
}

export default Footer;