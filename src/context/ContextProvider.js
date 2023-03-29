import {createContext, useState} from "react";
import { data } from "../data/CardData";

export const UserContext = createContext({});

export function ContextProvider({children}) {
  const [history, setHistory] = useState([])
  const [cardData, setCardData] = useState(data);

  return (
    <UserContext.Provider value={{history,setHistory,cardData,setCardData}}>
      {children}
    </UserContext.Provider>
  );
}