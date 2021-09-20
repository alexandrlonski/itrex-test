import { FC, useEffect, useState } from 'react';

type TITLES = {
  title: string;
  sort: boolean;
};

const initialTitles = [
  { title: 'id', sort: false },
  { title: 'First name', sort: false },
  { title: 'Last name', sort: false },
  { title: 'Email', sort: false },
  { title: 'Phone', sort: false },
  { title: 'State', sort: false }
];

const initialClick = {
  title: '',
  sort: false
}

export const TableHead: FC = () => {
  const [titles, setTitles] = useState<TITLES[]>(initialTitles);
  const [click, setClick] = useState<TITLES>(initialClick);

  const handleClick = (item: string) => {
    setClick(state => {
      state.title = item;
      state.sort = !state.sort;
      return { ...state }
    })
  };

  useEffect(() => {
    setTitles((state) => {
      return state.map((item) => {
        if (item.title === click.title) {
          item.sort = click.sort;
        }

        return { ...item };
      });
    });
  }, [click])

  return (
    <ul className="table-row">
      {titles.map(({ title, sort }) => {
        return (<li key={title} className="table-item" onClick={() => handleClick(title)}>
          <span className="item-text">
            {title}
            <span className={`item-text__icon ${sort ? 'up' : ''}`}></span>
          </span>
        </li>)
      })}
    </ul>
  );
};
