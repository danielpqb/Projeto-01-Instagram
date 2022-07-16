import Post from "./Post";

export default function Content(props) {
    const posts = [
        {
            ownerLogoSrc: "img/meowed 1.svg",
            photoSrc: "img/gato-telefone 1.svg",
            likerLogoSrc: "img/respondeai 1.svg",
            likerName: "respondeai"
        },
        {
            ownerLogoSrc: "img/barked 1.svg",
            photoSrc: "img/dog 1.svg",
            likerLogoSrc: "img/adorableanimals 1.svg",
            likerName: "adorable_animals"
        },
        {
            ownerLogoSrc: "img/meowed 1.svg",
            photoSrc: "img/gato-telefone 1.svg",
            likerLogoSrc: "img/respondeai 1.svg",
            likerName: "respondeai"
        }
    ]

    const postsJSX = posts.map((post) => {
        return <Post
            ownerLogoSrc={post.ownerLogoSrc}
            photoSrc={post.photoSrc}
            likerLogoSrc={post.likerLogoSrc}
            likerName={post.likerName} />
    })

    return (
        <div className="posts">
            {postsJSX}
        </div>
    )
}