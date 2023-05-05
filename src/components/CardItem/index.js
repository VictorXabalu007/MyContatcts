import { CardContainer } from './styles';

import editIcon from '../../assets/images/icons/edit.svg';
import trashIcon from '../../assets/images/icons/trash.svg';

export function CardItem() {
  return (
    <CardContainer>
      <div className="info">
        <div className="conatct-name">
          <strong>Matheus Silva</strong>
          <span>Instagram</span>
        </div>
        <span>email@email.com</span>
        <span>(xx) xxxxx-xxxx </span>
      </div>

      <div className="actions">
        <a href="/">
          <img src={editIcon} alt="Edit" />
        </a>
        <button type="button">
          <img src={trashIcon} alt="Trash" />
        </button>
      </div>
    </CardContainer>
  );
}
