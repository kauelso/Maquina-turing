import { useState } from 'react';
import { LabelWrapper, SubmitWrapper, TextWrapper } from './styles';

interface Props {
  fita: string[];
  setFita: (value: string[]) => void;
}

export function Entrada({ fita, setFita }: Props) {
  const [fitaString, setFitaString] = useState<string>('');

  function FitaParaArray() {
    let array: string[] = [];
    for (let i = 0; i < fitaString.length; i++) {
      array.push(fitaString[i]);
    }
    setFita(['|', ...array, ...fita]);
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
