import { createContext } from "react";

export const TodoContext=createContext();//todos 데이터 제공 용도 context
export const TodoDispatchContext=createContext();  //Todos Dispatch() 제공 용도의 context