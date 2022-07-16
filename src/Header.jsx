export default function Header() {
    return (
        <div class="header">
            <a href="https://www.instagram.com/">
                <div class="logo">
                    <div>
                        <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                    <div class="vbar mobignore"></div>
                    <div><img alt="" src="img/logo.png" /></div>
                </div>
            </a>
            <div class="search mobignore">
                Pesquisar
            </div>
            <div class="hbtns">
                <a href="https://www.instagram.com/">
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </a>
                <a href="https://www.instagram.com/">
                    <ion-icon class="mobignore" name="compass-outline"></ion-icon>
                </a>
                <a href="https://www.instagram.com/">
                    <ion-icon class="mobignore" name="heart-outline"></ion-icon>
                </a>
                <a href="https://www.instagram.com/">
                    <ion-icon class="mobignore" name="person-outline"></ion-icon>
                </a>
            </div>
        </div>
    )
}