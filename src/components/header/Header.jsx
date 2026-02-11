import './Header.css'

function Header() {

    return (
        <>
            <div className="animado"></div>
            <div className="logo">
                <img src="img/logo01.png" alt="Logo" />
            </div>

            <p class="description">
                A Portfolio of a Comic, Ilustration, Logo and UI Design artist.
            </p>

            <nav className="menu">
                <a href="index.html">Portafolio</a>
                <a href="about.html">About me</a>
                <a href="contact.html">Contact</a>
            </nav>
            <div className="social">
                <a href="https://www.youtube.com/@HBatto"><i class="fa-brands fa-youtube fa-xl" style="color: #40454f;"></i></a>
                <a href="https://x.com/hbatto"><i class="fa-brands fa-square-twitter fa-xl" style="color: #40454f;"></i></a>
                <a href="https://www.instagram.com/hbatto"><i class="fa-brands fa-instagram fa-xl"
                    style="color: #40454f;"></i></a>
                <a href="https://es.linkedin.com/in/jonathan-lara-4a872166"><i class="fa-brands fa-square-linkedin fa-xl"
                    style="color: #40454f;"></i></a>
            </div>
        </>
    )
}

export default Header