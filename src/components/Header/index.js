import { HeaderContainer } from './styles';
import logoImg from '../../assets/images/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="MyContacts" />

      <input type="text" placeholder="Pesquise pelo nome..." />
    </HeaderContainer>
  );
}
