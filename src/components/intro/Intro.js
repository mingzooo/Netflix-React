import './intro.scss';

const IntroComponent = props => {
    const { topText, fontSize, bottomText, image } = props
    return (
        <div className="intro-container">
            <div className="container">
                {topText && (
                    <h1>{topText}</h1>
                )}
                {bottomText && (
                    <h2>{bottomText}</h2>
                )}
            </div>

            {image && <img src={image} alt="dark component" />}
        </div>
    );
};

export default IntroComponent;