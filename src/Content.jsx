export default function Content(props) {
    const posts = [
        { ownerLogoSrc: "img/meowed 1.svg", photoSrc: "img/gato-telefone 1.svg", likerLogoSrc: "img/respondeai 1.svg", likerName: "respondeai" }
    ]

    return (
        <div class="content">
            <div class="c1">
                <div class="c1-1">
                    <img alt="" src={props.ownerLogoSrc} />
                    <div>meowed</div>
                </div>
                <div class="c1-2">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="c3">
                <img alt="" src={props.photoSrc} />
            </div>
            <div class="c2">
                <div class="c2-1">
                    <div class="c2-1-1">
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="c2-1-2">
                        <img alt="" src={props.likerLogoSrc} />
                        <p>Curtido por <strong>{props.likerName}</strong> e <strong>outras 101.523 pessoas</strong></p>
                    </div>
                </div>
                <div class="c2-2">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

            </div>
        </div>
    )
}