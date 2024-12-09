import CodeCard from "@/components/LandingPage/heroSection/CodeCard";
import ServiceCard from "@/components/LandingPage/heroSection/ServiceCard";

export default function Services() {
    return (
        <>
            <header className="main-header mt-5 pt-5">
                <div className="main-container gutter-3">
                    <div className="codepan">
                        <div className="back-board"></div>

                        <CodeCard cardClassName="top" title="HTML">
                            <div className="">
                                <code>
                                    <span className="c-div-color">&lt;div </span>
                                    <span className="c-class-color">class</span>
                                    <span>=</span>
                                    <span className="c-class-content-color">"rect"</span>
                                    <span className="c-div-color">&gt;&lt;/div&gt;</span>
                                </code>
                            </div>
                        </CodeCard>

                        <CodeCard cardClassName="center" title="SCSS">
                            <div className="">
                                <code>
                                    <p className="line1-anim">
                                        <span className="c-class-color">.rect </span>
                                        <span>{"{"}</span>
                                    </p>
                                    <br/>
                                    <p className="ml-2 line2-anim">
                                        <span className="c-css-selector-color">background</span>
                                        <span>:</span>
                                        <span className="c-class-color"> linear-gradient</span>(
                                    </p>
                                    <br/>
                                    <p className="ml-4 line3-anim">
                                        <span className="c-css-value-color">-119deg</span>,
                                    </p>
                                    <br/>
                                    <p className="ml-4 line4-anim">
                                        <span className="c-class-color">$gray</span>
                                        <span className="c-css-value-color"> 0%</span>,
                                    </p>
                                    <p className="ml-4 line5-anim">
                                        <span className="c-class-color">$dark-gray</span>
                                        <span className="c-css-value-color"> 100%</span>); {"}"}
                                    </p>
                                </code>
                            </div>
                        </CodeCard>

                        <CodeCard cardClassName="bottom" title="JS">
                            <div className="HomepageAnonHeaderHero_codeContent-I6nz5">
                                <code>
                                    <span className="c-class-color">var </span>
                                    <span className="c-script-variable-color">colors </span> = [
                                    <span className="c-class-content-color">"#74B087"</span>,
                                    <span className="c-class-content-color">"#DE7300"</span>,
                                    <span className="c-class-content-color">"#74B087"</span>];
                                    <br/>
                                    <span className=""></span>
                                    <br/>
                                    <span className="c-class-color">function </span>
                                    <span className="c-script-variable-color">animate </span>
                                    {"() {};"}
                                </code>
                            </div>
                        </CodeCard>
                    </div>
                    <div className="description">
                        <div className="gutter-1 d-flex text-center pt-5">
                            <h1>
                                TOGETHER WE <span style={{color: "#38F1B9"}}>PUSH </span>YOU
                                <span style={{color: "#38F1B9"}}>.</span> <br/>
                                TOGETHER WE <span style={{color: "#38F1B9"}}>THRIVE</span>!
                            </h1>
                        </div>
                    </div>
                    {/* end of description part*/}
                    <img src="/assets/mockups/lines.svg" alt="" className="img-anonHeader"/>
                </div>
            </header>
            <div className="main-container service-container">
                <ServiceCard
                    imgSrc="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/okf-growth.svg"
                    title="Enhancement"
                    buttonText="Try the Editor"
                >
                    <p className="text-white fw-bold">
                        During Discovery, Designing and Development phases, our technical
                        team is always there to provide suggestions and edits to improvise
                        their product in the best possible manner.
                    </p>
                </ServiceCard>

                <ServiceCard
                    imgSrc="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/okf-client-centric-development.svg"
                    title="Client Centric Development"
                    buttonText="Join this Week’s Challenge"
                >
                    <p className="text-white fw-bold">
                        We craft the client's needs on web, mobile, and blockchain to tailor
                        the solutions and enhance growth of the businesses.
                    </p>
                </ServiceCard>

                <ServiceCard
                    imgSrc="https://www.hyperlinkinfosystem.com/assets/frontend_assets/img/okf-qa.svg"
                    title="Quality Deliverance"
                    buttonText="Explore Trending"
                >
                    <p className="text-white fw-bold">
                        We believe in delivering quality products to our clients by assuring
                        all their project specifications at the best industry competitive
                        price.
                    </p>
                </ServiceCard>
            </div>
        </>
    );
}
