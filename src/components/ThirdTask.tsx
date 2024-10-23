import React, { useState } from 'react';
import ReadName from '../service/ReadName';
import ReadColor from '../service/ReadColor';

const ThirdTask = () => {
  const [names, setNames] = useState<{ name: string }[]>([]);
  const [colors, setColors] = useState<{ color: string }[]>([]);

  console.log(names, colors, "datas");

  return (
    <>
      <ReadName setNames={setNames} />
      <ReadColor setColors={setColors} />
      {names.length > 0 && colors.length > 0 ?
        names.map((data, index) => {
          const colorStyle = colors[index]?.color || colors[Math.floor(Math.random() * colors.length)]?.color;
          return (
            <h1 key={index}
              style={{ color: colorStyle }}
            >
              {data.name} ({colorStyle})
            </h1>
          );
        })
        :
        <h1>Valami hiba történt vagy valamelyik lekérdezésre nem érkezett válasz.</h1>}
    </>
  );
}

export default ThirdTask;
