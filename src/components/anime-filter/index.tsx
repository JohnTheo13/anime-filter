import { useState, ChangeEvent } from "react";
import { getAnime } from "../../models/getAnime";
import ListItem from "./list-item";
import "./anime-list.css";
import { regex } from "../../utils/helpers";

let timer: NodeJS.Timeout;
const AnimeFilter = () => {
  const [title, setTitle] = useState("");
  const [{ items, error }, setList] = useState({
    items: [] as string[],
    error: false,
  });

  const onchange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    clearTimeout(timer);
    const text = e.target.value.trim()
    if (text.length > 0) {
      const matching = regex(text);
      /**
       *  mocking an API that would return filtered results
       * debounce method
       */
      timer = setTimeout(async () => {
        try {
          const res = await getAnime();
          const items = res.filter((item) => {
            return matching.test(item);
          });
          setList((list) => ({ ...list, items }));
        } catch (error) {
          setList((list) => ({ ...list, error: true }));
        }
      }, 250);
    }
    setTitle(e.target.value);
  };

  const onclick = (t: string): void => {
    setTitle(t);
    setList({ items: [], error: false });
  };

  return (
    <div className="anime-container">
      <input
        type="text"
        name="title"
        id="title"
        onChange={onchange}
        value={title}
      />
      <div className="anime-list">
        {!error ? (
          !!title.length &&
          items.map((item) => (
            <ListItem
              match={title}
              title={item}
              key={item}
              onClick={() => onclick(item)}
            />
          ))
        ) : (
          <div className="anime-error">Something went wrong</div>
        )}
      </div>
    </div>
  );
};

export default AnimeFilter;
