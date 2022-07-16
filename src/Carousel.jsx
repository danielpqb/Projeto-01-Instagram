export default function Carousel() {
    const stories = [
        { imgSrc: "img/9gag 1.svg", name: '9gag' },
        { imgSrc: "img/meowed 1.svg", name: 'meowed' },
        { imgSrc: "img/barked 1.svg", name: 'barked' },
        { imgSrc: "img/nathanwpylestrangeplanet 1.svg", name: 'nathanwpyle...' },
        { imgSrc: "img/wawawiwacomicsa 1.svg", name: 'wawawiwac...' },
        { imgSrc: "img/respondeai 1.svg", name: 'respondeai' },
        { imgSrc: "img/filomoderna 1.svg", name: 'filomoderna' },
        { imgSrc: "img/memeriagourmet 1.svg", name: 'memeriago...' },
    ]

    return (
        <div class="carousel">
            <div class="stories">
                {stories.map((story) => { return <Story imgSrc={story.imgSrc} name={story.name} /> })}
            </div>
            <div class="rollbtn mobignore">
                <div class="icon1">
                    <ion-icon name="chevron-forward-circle-sharp"></ion-icon>
                </div>
                <div class="icon2">
                    <ion-icon name="ellipse-outline"></ion-icon>
                </div>
            </div>
        </div >
    )
}

function Story(props) {
    return (
        <a href="https://www.instagram.com/">
            <div class="story">
                <div class="img1">
                    <img alt="" src="img/stories_background.jpg" />
                    <div class="img2"><img alt="" src={props.imgSrc} /></div>
                </div>
                <p>{props.name}</p>
            </div>
        </a>
    )
}