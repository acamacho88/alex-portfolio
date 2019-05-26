import Header from '../components/Header';
import Layout from '../components/Layout';
import Head from 'next/head';

const About = () => (
    <Layout>
        <Head>
            <title>Alex Camacho's Portfolio</title>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="aboutContent">
            <div className="title">Bio</div>
            <div className="aboutText">
                <img className="bioPic" src="/static/alex-guitar.png" />
                <p>For the last five years, I’ve worked in a tech startup where I’ve worn many hats, ranging from Professional Services to training to Tier 3 Support. I’ve continued to expand my knowledge of web development and currently act as a liaison between our development team and our most prominent clients. I find great enjoyment in identifying new, unique ways to trouble-shoot challenging problems within the product and with our customers. I actively seek out the newest technology and share the learnings with my colleagues.</p>

                <p>Recognizing my passion and appreciation for coding, I began taking classes through Udacity, where I learned more about fullstack – leading me to complete a fullstack bootcamp at UC Berkeley Extension. As a program participant, I was able to pair my work experience with my previous online learning to create two fully functioning websites, in collaboration with fellow program participants, over the course of the certificate program.</p>

                <p>In my spare time, I enjoy playing guitar, listening to and analyzing music from all genres, and reading. Additional nerdy ventures include obsessing over the First World War and listening to old Monty Python routines. A graduate of the Massachusetts Institute of Technology with a Bachelors of Science in Physics, I still find great pleasure in tracking the newest discoveries in the astrophysics and astronomy fields.</p>
            </div>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            .aboutContent {
                margin: 20px 60px 20px 5px;
            }

            .aboutText {
                margin-left: 5px;
            }

            .title {
                font-size: 25px;
            }

            .bioPic {
                float: left;
                height: 500px;
                margin: 0px 20px 20px 0px;
            }
        }
        
        @media (min-width: 1024px) {
            .aboutContent {
                margin-left: 60px;
                margin-top: 20px;
                margin-bottom: 20px;
                margin-right: 60px;
            }

            .title {
                font-size: 25px;
            }

            .bioPic {
                float: left;
                height: 500px;
                margin: 0px 20px 20px 0px;
            }

        }
        
        @media (min-width: 1440px) {
            
        }`}

        </style>
    </Layout>
)
  
export default About;