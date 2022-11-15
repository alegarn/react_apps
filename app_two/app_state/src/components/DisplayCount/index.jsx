import { useEffect } from 'react';

const DisplayCount = (props) => {
  const { label, count } = props.data;


  useEffect(
    // Premier paramètre : une fonction à exécuter
    () => {
      console.log("Current count:", count);

      // seulement au démontage
      return () => {
        console.log("Unmounting DisplayCount component!", count);
      }
    },
    // Second paramètre : les "dépendances" à surveiller
    [count]
  );

  return (
    <div className="DisplayCount">
    <span>{label}</span> <span>{count}</span>
    </div>
  );

};
export default DisplayCount;