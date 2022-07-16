export default function SidebarSuggestions(props) {
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