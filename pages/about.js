import Header from '../components/Header';
import Layout from '../components/Layout';

const About = () => (
    <Layout>
        <div className="aboutContent">
            <div className="title">Bio</div>
            <div className="aboutText">
                <img className="bioPic" src="/static/alex-guitar.png" />
                <p>In my current job and my side projects, I take great enjoyment in finding new ways to solve problems, and approach issues from a different angle.
                    I'm always excited to learn about new technologies, fill gaps in my existing knowledge, and pass the information I've gained onto team members knowing that as all of us grow stronger, the team and product get stronger as well.
                </p>

                <p>I graduated from the Massachusetts Institute of Technology with a Bachelors of Science in Physics, and had great fun with the marriage of hard, empirical data along with analytical/programmatic ways of analyzing them, and seeing how they fit into broader theories.</p>
                
                <p>I have worked at a tech startup the last five years and made use of existing web development knowledge I already had and greatly expanded it during this time.</p>

                <p>In addition, during my time over the last five years, I've enrolled in courses to go through official fullstack learning materials, including Udacity Fullstack Nanodegree and UC Berkeley Extension fullstack bootcamp.
                     I learned a great deal working on the assignments and building applications in group projects where we would develop a concept of the site, plan out the responsibilities, and launch the app in two weeks' time.</p>

                <p>I've been able to apply these skills and continue learning at my current position, finding new ways to troubleshoot problems that arise and making sure to pass on any techniques that make problem solving more efficient to my teammates.</p>

                <p>I'm passionate about rock, hip-hop, and jazz music as well as playing guitar in my spare time. I also enjoy comedy, history, astronomy and astrophysics, reading, and other typically nerdy avenues.</p>
            </div>
        </div>
        <style jsx>{`
        @media (min-width: 320px) and (max-width: 1023px) {
            
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