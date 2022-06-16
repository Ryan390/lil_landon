import footer_links from '../data/footer_links.json';


const Footer = () => {
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