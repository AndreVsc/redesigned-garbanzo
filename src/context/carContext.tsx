import React,{createContext} from "react";

interface CarContextProps{
    valor: string;
}

export const CarContext = createContext<CarContextProps|undefined>(undefined);

export default function CarContextProvider({children}:any){
    const carValor:CarContextProps = {valor:"SLA"}

    return(
        <CarContext.Provider value={carValor}>
            {children}
        </CarContext.Provider>
    );
}