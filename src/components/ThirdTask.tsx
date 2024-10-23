import React, { useState } from 'react';
import ReadName from '../service/ReadName';
import ReadColor from '../service/ReadColor';
import style from '../style/ThirdTask.module.css'

const ThirdTask = () => {
  const [names, setNames] = useState<{ name: string }[]>([]);
  const [colors, setColors] = useState<{ color: string }[]>([]);

  const mixedData = names.map((name) => {
    if (name && colors.length > 0) {
      return {
        name: name.name,
        color: colors[Math.floor(Math.random() * colors.length)].color,
      };
    } else {
      console.error('Hiba: Név vagy színek hiányoznak');
      return null; 
    }
  });  


return (
  <div className={style.ThirdTask}>
    <div>
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
    </div>
    <div>
      <h1>Más megoldás:</h1>
      {mixedData.map((alldata,index) => {
        return (
          <h1 key={index}style={{ color: alldata?.color }}>{alldata?.name}</h1>
        )
      })}
    </div>
  </div>
);
}

export default ThirdTask;
