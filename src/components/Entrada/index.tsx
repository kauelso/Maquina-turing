import { useState } from "react";

interface Props{
    fita: string[],
    setFita: (value: string[])=>void
}

export function Entrada({fita, setFita}: Props){
    const [fitaString, setFitaString] = useState<string>("");

    function FitaParaArray(){
        let array: string[] = [];
        for(let i=0;i<fitaString.length;i++){
            array.push(fitaString[i]);
        }
        setFita([...array,...fita]);
    };

    return(
        <>
            <label >Fita:
            <input type="text" value={fitaString} onChange={(e) => setFitaString(e.target.value)} />
            </label>    
            <input type="submit" value="Enviar" onClick={FitaParaArray}/>
        </>
    );
}