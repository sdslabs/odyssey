import React from 'react';
import { ScrollMenu, VisibilityContext,Arrow } from 'react-horizontal-scrolling-menu';
import { EventCard } from "./EventCard";
const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` })
    );
function Announcement() {
    const [items, setItems] = React.useState(getItems);
    const [selected, setSelected] = React.useState([]);
    const [position, setPosition] = React.useState(0);
    const isItemSelected = (id) => !!selected.find((el) => el === id);

    const handleClick =
        (id) =>
        ({ getItemById, scrollToItem }) => {
    const itemSelected = isItemSelected(id);
        setSelected((currentSelected) =>
        itemSelected
        ? currentSelected.filter((el) => el !== id)
        : currentSelected.concat(id)
      );
    };
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {items.map(({ id }) => (
            <EventCard
              itemId={id} // NOTE: itemId is required for track items
              title={id}
              key={id}
              onClick={handleClick(id)}
              selected={isItemSelected(id)}
            />
          ))}
        </ScrollMenu>
      );
    }
    
    function LeftArrow() {
      const { isFirstItemVisible, scrollPrev } =
        React.useContext(VisibilityContext);
    
      return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
          &lt;
        </Arrow>
      );
    }
    
    function RightArrow() {
      const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
    
      return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
          &gt;
        </Arrow>
      );
}
