export default function Sidebar() {
    const sidebarSuggestions = [
        { logo: "img/badvibesmemes 1.svg", name: 'bad.vibes.memes', status: 'Segue você' },
        { logo: "img/chibirdart 1.svg", name: 'chibirdart', status: 'Segue você' },
        { logo: "img/razoesparaacreditar 1.svg", name: 'razoesparaacreditar', status: 'Novo no Instagram' },
        { logo: "img/adorableanimals 1.svg", name: 'adorable_animals', status: 'Segue você' },
        { logo: "img/smallcutecats 1.svg", name: 'smallcutecats', status: 'Segue você' }
    ]

    const sidebarSuggestionsJSX = sidebarSuggestions.map((suggestion) => {
        return <SidebarSuggestions logo={suggestion.logo} name={suggestion.name} status={suggestion.status} />
    })

    return (
        <div class="sidecontent">
            <div class="s1">
                <a href="https://www.instagram.com/">
                    <div class="s1-1">
                        <img alt="" src="img/catanacomics 1.svg" />
                    </div>
                </a>
                <a href="https://www.instagram.com/">
                    <div class="s1-2">
                        <h1><strong>catanacomics</strong></h1>
                        <h2>Catana</h2>
                    </div>
                </a>
            </div>
            <div class="s2">
                <div class="s2-1">
                    <div>
                        <h1>Sugestões para você</h1>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/">
                            <h2>Ver tudo</h2>
                        </a>
                    </div>
                </div>
                {sidebarSuggestionsJSX}
            </div>
            <div class="s3">
                <p>
                    Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                    Termos • Localizações • Contas mais relevantes • Hashtags •
                    Idioma
                </p>
                <p>
                    © 2021 INSTAGRAM DO FACEBOOK
                </p>
            </div>
        </div>
    )
}

function SidebarSuggestions(props) {
    return (
        <div class="s2-2">
            <a href="https://www.instagram.com/">
                <div class="s2-2-1">
                    <img alt="" src={props.logo} />
                    <div>
                        <h1>{props.name}</h1>
                        <h2>{props.status}</h2>
                    </div>
                </div>
            </a>
            <div class="s2-2-2">
                <a href="https://www.instagram.com/">
                    <h3>Seguir</h3>
                </a>
            </div>
        </div>
    )
}
