import Link from 'next/link';

const Header = () => (
    <div className="header">
        <div className="header__logo-bar">
            <div className="header__logo"></div>
            <div className="social_media_block">
                <a className="social_media_icon" href="mailto:alexander.r.camacho@gmail.com">
                    <i className="far fa-envelope"></i>
                </a>
                <a className="social_media_icon" href="https://github.com/acamacho88">
                    <i className="fab fa-github"></i>
                </a>
                <a className="social_media_icon" href="https://www.linkedin.com/in/alex-r-camacho/">
                    <i className="fab fa-linkedin-in"></i>
                </a>
            </div>
        </div>
        <div className="header__nav-bar">
                <Link href="/">
                    <a className="nav-bar__item">Home</a>            
                </Link>
                <Link href="/about">
                    <a className="nav-bar__item">About Me</a>            
                </Link>                           
        </div>
        <style jsx>{`
        @media (min-width: 320px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 48px;
                background: #000000;
            }

            .header__logo {
                margin-left: 12px;
                height: 40px;
                width: 40px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 50%;
            }

            .social_media_block {
                margin-right: 12px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 16px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .social_media_block a {
                text-decoration: none;
                color: #FFFFFF;
            }

            .social_media_block a:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 48px;
                width: 100%;
                background-color: #212222;
            }
            .nav-bar__item {
                text-decoration: none;
                margin: 0 8px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 16px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }

            .fab, .far {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }
        }

        @media (min-width: 1024px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 103px;
                background: #000000;
            }

            .header__logo {
                margin-left: 15px;
                height: 90px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 50%;
            }

            .social_media_block {
                margin-right: 60px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 24px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .social_media_block a {
                text-decoration: none;
                color: #FFFFFF;
            }

            .social_media_block a:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 77px;
                width: 100%;
                background-color: #212222;
            }
            .nav-bar__item {
                text-decoration: none;
                margin: 0 30px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }

            .fab, .far {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }

            .fab:hover, .far:hover {
                color: #2E69A5;
            }
        }
        
        @media (min-width: 1440px) {
            .header {
                width: 100%;
            }

            .header__logo-bar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 103px;
                background: #000000;
            }

            .header__logo {
                margin-left: 10px;
                height: 90px;
                width: 90px;
                background-image: url("/static/logo.png");
                background-size: contain;
                background-repeat: no-repeat;
                border-radius: 50%;
            }

            .social_media_block {
                margin-right: 112px;
                height: 48px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 24px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .social_media_block a {
                text-decoration: none;
                color: #FFFFFF;
            }

            .social_media_block a:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .header__nav-bar {
                display: flex;
                align-items: center;
                justify-content: center; 
                height: 77px;
                width: 100%;
                background-color: #212222;
            }
            .nav-bar__item {
                text-decoration: none;
                margin: 0 30px;
                color: #ffffff;
                font-family: "Aveni Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
            }

            .nav-bar__item:hover {
                color: #2E69A5;
                transition: 0.3s;
            }

            .nav-bar__item--dropdown {
                cursor: pointer; 
            }

            .fab {
                margin: 10px;
                -webkit-transition: all 0.5s;
                transition: all 0.5s;
                color: #777;
                font-size: 30px;
            }

            .fab:hover {
                color: #2E69A5;
            }
        }
        `}</style>
    </div>
)

export default Header;