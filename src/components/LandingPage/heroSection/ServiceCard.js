import Image from 'next/image'

export default function ServiceCard(props) {
    const { title, imgSrc } = props;

    return (
        <>
            <div className="service-card">
                <div className="icon-container">
                    <Image
                        src={imgSrc}
                        alt="img"
                        className="service_card_img"
                        width={500}
                        height={500}
                    />
                </div>
                <h2 className="title">{title}</h2>
                {props.children}
            </div>
            <Image
                src="/assets/mockups/lines2.svg"
                alt="lines_image"
                className="HomepageAnonTopics_bg-2"
                width={500}
                height={500}
            />
        </>
    );
}


