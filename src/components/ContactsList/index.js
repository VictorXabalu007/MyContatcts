import { CardItem } from '../CardItem';
import { ContactsListContainer, HeaderList, CardListContainer } from './styles';
import arrowIcon from '../../assets/images/icons/arrow.svg';

export function ContactsList() {
  return (
    <ContactsListContainer>
      <HeaderList>
        <h2>3 contatos</h2>

        <a href="/">
          Novo Contato
        </a>
      </HeaderList>

      <CardListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </header>

        <CardItem />
        <CardItem />
        <CardItem />
      </CardListContainer>
    </ContactsListContainer>
  );
}
