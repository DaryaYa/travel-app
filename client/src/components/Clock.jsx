import React, { useState, useEffect } from 'react';

// const addZero = (n) => {
//   return (parseInt(n, 10) < 10 ? "0" : "") + n;
// }

export const Clock = ({timeZone, language}) => {



      
    //    hour = today.getHours(),
    //    min = today.getMinutes(),
    //    sec = today.getSeconds();

    const [time, setTime] = useState(Date().toLocaleString().slice(16, 25));

   const options = {
     weekday: "long",
     month: "short",
     day: "numeric",
     hour: "numeric",
     minute: "numeric",
     second: "numeric",
     timeZone: timeZone,
   };
let today = new Date();

    const nowTime = () => {

     return today.toLocaleString(language, options);
  //  return  (`${addZero(hour)}:${addZero(min)}:${addZero(sec)}`)  
    }

    useEffect(() => {
      let timer = setTimeout(() => {
        setTime(nowTime);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }, [time]);

    return(
        <h3>
            {time}
        </h3>
    )
       

}