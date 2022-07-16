import FooterIcons from "./FooterIcons"

export default function Footer(props) {
    const footerIcons = [
        { iconName: 'home' },
        { iconName: 'search-outline' },
        { iconName: 'add-circle-outline' },
        { iconName: 'heart-outline' },
        { iconName: 'person-outline' }
    ]

    const footerIconsJSX = footerIcons.map((icon) => {
        return <FooterIcons iconName={icon.iconName} />
    })

    return (
        <footer>
            <div className="fbtns">
                {footerIconsJSX}
            </div>
        </footer>
    )
}