import React from "react"

export default function Post(props) {
    const [isLiked, setIsLiked] = React.useState('heart-outline')
    const [likeAnimation, setLikeAnimation] = React.useState('hidden')
    return (
        <div class="content">
            <div class="c1">
                <div class="c1-1">
                    <img alt="" src={props.ownerLogoSrc} />
                    <div>{props.ownerName}</div>
                </div>
                <div class="c1-2">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="c3">
                <img alt="" src={props.photoSrc} onClick={() => {
                    setIsLiked('heart')
                    setLikeAnimation((likeAnimation === 'hidden' || likeAnimation === 'animateHeart2') ? 'animateHeart' : 'animateHeart2')
                }} />
                <div className={likeAnimation}><ion-icon name='heart' ></ion-icon></div>
            </div>
            <div class="c2">
                <div class="c2-1">
                    <div class="c2-1-1">
                        <ion-icon name={isLiked} onClick={() => {
                            setIsLiked(isLiked === 'heart' ? 'heart-outline' : 'heart')
                            setLikeAnimation('hidden')
                        }}></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="c2-1-2">
                        <img alt="" src={props.likerLogoSrc} />
                        <p>Curtido por <strong>{props.likerName}</strong> e <strong>outras {props.likes} pessoas</strong></p>
                    </div>
                </div>
                <div class="c2-2">
                    <ion-icon name="bookmark-outline"></ion-icon>
                </div>

            </div>
        </div>
    )
}