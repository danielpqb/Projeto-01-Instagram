export default function Footer() {
    function FooterIcons(props) {
        return (
            <ion-icon name={props.iconName} ></ion-icon>
        )
    }

    const footerIcons = [
        { iconName: 'home' },
        { iconName: 'search-outline' },
        { iconName: 'add-circle-outline' },
        { iconName: 'heart-outline' },
        { iconName: 'person-outline' }
    ]

    return (
        <footer>
            <div className="fbtns">
                {footerIcons.map((icon) => { return <FooterIcons iconName={icon.iconName} /> })}
            </div>
        </footer>
    )
}