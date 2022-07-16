import Post from "./Post";

export default function Content() {
    const posts = [
        {
            ownerLogoSrc: "img/meowed 1.svg",
            ownerName: "meowed",
            photoSrc: "img/gato-telefone 1.svg",
            likerLogoSrc: "img/respondeai 1.svg",
            likerName: "respondeai",
            likes: '101.523'
        },
        {
            ownerLogoSrc: "img/barked 1.svg",
            ownerName: "barked",
            photoSrc: "img/dog 1.svg",
            likerLogoSrc: "img/adorableanimals 1.svg",
            likerName: "adorable_animals",
            likes: '99.159'
        },
        {
            ownerLogoSrc: "img/meowed 1.svg",
            ownerName: "meowed",
            photoSrc: "img/gato-telefone 1.svg",
            likerLogoSrc: "img/respondeai 1.svg",
            likerName: "respondeai",
            likes: '121.319'
        }
    ]

    return (
        <div className="posts">
            {posts.map((post) => {
                return <Post
                    ownerLogoSrc={post.ownerLogoSrc}
                    ownerName={post.ownerName}
                    photoSrc={post.photoSrc}
                    likerLogoSrc={post.likerLogoSrc}
                    likerName={post.likerName}
                    likes={post.likes} />
            })}
        </div>
    )
}