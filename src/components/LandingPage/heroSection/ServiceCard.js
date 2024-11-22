
export default function ServiceCard(props) {
    const { title, imgSrc } = props;

    return (
        <>
            <div className="service-card">
                <div className="icon-container">
                    <img src={imgSrc} alt="img" className="service_card_img" />
                </div>
                <h2 className="title">{title}</h2>
                {props.children}
            </div>

            <img
                src="/assets/mockups/lines2.svg"
                alt="lines_image"
                className="HomepageAnonTopics_bg-2"
            />
        </>
    );
}


