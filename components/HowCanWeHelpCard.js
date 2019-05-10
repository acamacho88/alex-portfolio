import Link from 'next/link';

const HowCanWeHelpCard = (props) => (
        <div className="cardContainer">
            <div className="cardContent">
                <i className={"helpCardIco fas fa-" + props.ico} />
                <br />
                <p className="cardTitle">{props.title}</p>
                <div className="cardText">{
                    props.items.map((item, index) => (
                        <div key={index}>{item}</div>
                    ))
                    }
                </div>
                <br />
                <a className="projLink" href={props.destination}>
                    <div className="siteLink">Click here to check out my {props.siteDescr} site!</div>
                </a>
                <br />
                <a className="projLink" href={props.repo}>
                    <div className="repoLink">{props.siteDescr} site's repo</div>
                </a>
            </div>
            <style jsx>{`
            @media (min-width: 320px) {
                .cardContainer {
                    width: 310px;
                    background-color: #FFFFFF;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                    border-bottom: 1px solid black;
                }

                .cardContainer:hover {
                    background-color: #2E69A5;
                }

                .cardContent {
                    margin: 30px 0;
                    text-align: center;
                }

                .helpCardIco {
                    font-size: 31px;
                }

                .cardTitle {
                    font-size: 20px;
                    margin: 13px 7px;
                }

                .cardText {
                    font-size: 17px;
                    margin: 0 7px;
                }

                .cardText div {
                    margin: 12px 0;
                }
            }

            @media (min-width: 1024px) {
                .cardContainer {
                    width: 320px;
                    height: 430px;
                    background-color: #FFFFFF;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                    border-bottom: 0px;
                }

                .cardContainer:hover {
                    background-color: #99B7FF;
                }

                .cardContent {
                    margin: 30px 0;
                    text-align: center;
                }

                .helpCardIco {
                    font-size: 31px;
                }

                .cardTitle {
                    font-size: 21px;
                    margin: 13px 7px;
                }

                .cardText {
                    font-size: 17px;
                    margin: 0 7px;
                }

                .cardText div {
                    margin: 12px 0;
                }

                .projLink {
                    text-decoration: none;
                }


                .projLink:hover {
                    text-decoration: underline;
                }
            }

            @media (min-width: 1440px) {
                .cardContainer {
                    width: 320px;
                    height: 360px;
                    background-color: #FFFFFF;
                    -webkit-transition: all 1s;
                    transition: all 1s;
                    border-bottom: 0px;
                }

                .cardContainer:hover {
                    background-color: #2E69A5;
                }

                .cardContent {
                    margin: 30px 0;
                    text-align: center;
                }

                .helpCardIco {
                    font-size: 40px;
                }

                .cardTitle {
                    font-size: 22px;
                }

                .cardText {
                    margin: 0 7px;
                    font-size: 18px;
                }

                .cardText div {
                    margin: 12px 0;
                }
            }
            `}</style>
        </div>
)

export default HowCanWeHelpCard;