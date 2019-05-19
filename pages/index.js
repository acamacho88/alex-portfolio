import Layout from '../components/Layout';
import Head from 'next/head';
import HowCanWeHelpCard from '../components/HowCanWeHelpCard';
import BusinessPoint from '../components/BusinessPoint';

const Index = () => (
    <Layout>
        <Head>
            <title>Alex Camacho's Portfolio</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="jumbotron">
            <a className="emailLink" href="mailto:alexander.r.camacho@gmail.com"><button className="cta-button">Contact Me</button></a>
        </div>
        <div className="helpCards">
            <HowCanWeHelpCard destination="https://acamacho88.github.io/Word-Guess-Game/" repo="https://github.com/acamacho88/Word-Guess-Game" siteDescr="Word Guess game" ico="keyboard" title="Smooth client experience" items={["Edge cases covered","Make use of latest HTML5 elements","Sites built to load as fast as possible"]}/>
            <HowCanWeHelpCard destination="https://acamacho88.github.io/GifTastic/" repo="https://github.com/acamacho88/GifTastic" siteDescr="Gif generating" ico="server" title="Backend expertise" items={["API integration","Asynchronous loading","Node environments"]}/>
            <HowCanWeHelpCard destination="https://acamacho88.github.io/TriviaGame/" repo="https://github.com/acamacho88/TriviaGame" siteDescr="Trivia game" ico="code" title="Use of common libraries and frameworks" items={["React","Bootstrap","jQuery"]}/>
            <HowCanWeHelpCard destination="https://ucb-abba-project1.github.io/project/" repo="https://github.com/UCB-ABBA-Project1/project" siteDescr="Team-built Adopt-a-pet" ico="project-diagram" title="Excited by collaboration" items={["User of version control with Git","Team player","Ready to develop and troubleshoot together"]}/>
        </div>
        <div className="callUs">
        </div>
        <div className="business-points">
            <div className="business-point__title">Stable, efficient solutions</div>
            <div className="business-points__bullets">
                <BusinessPoint title="Collaborative Player" description="Experienced working as part of a team both developing and troubleshooting" />
                <BusinessPoint title="Strive for Order" description="Neatness and simplicity key factors in code creation" />
                <BusinessPoint title="Frontend knowledge" description="Experience utilizing CSS, Bootstrap, jQuery, Handlebars" />
            </div>
            <div className="business-points__bullets">
                <BusinessPoint title="Database integration" description="MySQL, Firebase, MongoDB, Sequelize" />
                <BusinessPoint title="Rapid information consumer/gatherer" description="Learn quickly, incredibly efficient at researching information online" />
                <BusinessPoint title="Experience on multiple platforms" description="Developed and debugged on FF, Chrome, IE, and Safari as well as Androids and iPhones" />            
            </div>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 430px;
                background-image: url("/static/codes-coding-developing-270623.jpg");
            }

            .cta-text {
                text-align: center;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                position: absolute;
                left: 50%;
                margin-left: -120px;
                height: 75px;	
                width: 240px;	
                background-color: #2E69A5;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
                text-align: center;
                border-style: none;
                border-radius: 5px;
            }

            .helpCards {
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                margin: 0 10px;
            }

            .helpCardTitle {
                font-size: 27px;
                text-align: center;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 40px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                text-align: center;
                padding-top: 20px;
                margin-bottom: 20px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 16px;
                margin-top: 0px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .callUs {
                margin-top: -1px;
                display: flex;
                justify-content: center;
                background-color: black;
                height: 96px;
                font-size: 24px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                align-items: center;
                line-height: 48px;
            }

            .callUs .callUsText {
                text-align: center;
                width: 100%;
                height: 8px;
            }            

            .callUs .callUsPhone {
                margin-bottom: 10px;
                height: 38px;
                text-align: center;
                width: 100%;
                color: #2E69A5;
            }
        }

        @media (min-width: 1024px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 430px;
                background-image: url("/static/codes-coding-developing-270623.jpg");
            }

            .cta-text {
                margin-left: 60px;
                margin-bottom: 22px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .emailLink {
                width: 319px;
                margin-top: 22px;
                margin-left: 60px;
            }

            .cta-button {                	
                height: 75px;	
                width: 319px;	
                background-color: #2E69A5;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
                text-align: center;
                cursor: pointer;
                border-style: none;
                border-radius: 5px;
                -webkit-transition-duration: .5s;
                transition-duration: .5s;
            }

            .cta-button:hover {
                box-shadow: 0px 0px 10px 8px;
            }

            .helpCards {
                display: flex;
                justify-content: center;
                margin: 0 60px;
            }

            .helpCardTitle {
                font-size: 27px;
                text-align: center;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 70px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                margin-left: 60px;
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 30px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 60px;
                margin-top: 40px;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
            }

            .callUs {
                background-color: black;
                height: 15px;
                font-size: 30px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .callUs .callUsText {
                margin-right: 7px;
            }

            .callUs .callUsPhone {
                margin-left: 7px;
                color: #2E69A5;
            }
        }

        @media (min-width: 1440px) {
            .jumbotron {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 690px;
                background-image: url("/static/codes-coding-developing-270623.jpg");
            }

            .cta-text {
                margin-left: 112px;
                margin-bottom: 22px;
                color: #FFFFFF;	
                font-family: "Avenir Next";	
                font-size: 35px;	
                font-weight: 500;	
                line-height: 48px;
            }

            .cta-button {
                margin-top: 22px;
                margin-left: 112px;	
                height: 75px;	
                width: 319px;	
                background-color: #2E69A5;
                color: #FFFFFF;
                font-family: "Avenir Next";
                font-size: 24px;
                font-weight: 500;
                line-height: 48px;
                text-align: center;
            }

            .helpCards {
                display: flex;
                justify-content: center;
                margin: 0 112px;
            }

            .helpCardTitle {
                font-size: 35px;
                text-align: left;
                margin-top: 40px;
                font-weight: bold;
            }

            .business-points {
                padding-bottom: 60px;
                width: 100%;
                background-color: #D8D8D8;
            }

            .business-point__title {
                margin-left: 112px;
                padding-top: 40px;
                color: #000000;
                font-family: "Avenir Next";
                font-size: 35px;
                font-weight: 500;
            }

            .business-points__bullets {
                margin: 0 112px;
                margin-top: 30px;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }

            .callUs {
                background-color: black;
                height: 128px;
                font-size: 30px;
                color: #FFFFFF;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .callUs .callUsText {
                margin-right: 7px;
            }

            .callUs .callUsPhone {
                margin-left: 7px;
                color: #2E69A5;
            }
        }        
        `}</style>
    </Layout>
)
  
export default Index