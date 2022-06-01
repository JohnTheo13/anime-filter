import { regex } from "../../utils/helpers";

interface Props {
  title: string;
  match: string;
  onClick: () => void;
}

const ListItem = ({ title, match, onClick}: Props) => {
  const innerText = title.replaceAll(regex(match), '<strong>$&</strong>')
  return <div role="menuitem" className="anime-list-item" dangerouslySetInnerHTML={{ __html: innerText }} onClick={onClick} />;
};

export default ListItem;
