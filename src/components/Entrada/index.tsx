import { useState } from 'react';
import { LabelWrapper, SubmitWrapper, TextWrapper } from './styles';

interface Props {
  simboloBranco: string;
  setFita: (value: string[]) => void;
  limpaFita: () => void;
}

export function Entrada({ simboloBranco, limpaFita, setFita }: Props) {
  const [fitaString, setFitaString] = useState<string>('');

  function FitaParaArray() {
    limpaFita();
    let array: string[] = [];
    for (let i = 0; i < fitaString.length; i++) {
      array.push(fitaString[i]);
    }
    array.push(simboloBranco);
    setFita(array);
  }

  return (
    <>
      <LabelWrapper>
        Cadeia:
        <TextWrapper
          type="text"
          value={fitaString}
          onChange={(e) => setFitaString(e.target.value)}
        />
      </LabelWrapper>
      <SubmitWrapper type="submit" value="Enviar" onClick={FitaParaArray} />
    </>
  );
}
