import { HeaderContainer, Logo } from "./header.style"

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <Logo src="/images/myteacher.png"/>
            </div>
            
            <p> Encontre o professor perfeito </p>
        </HeaderContainer>
    )
}

export default Header