import { useEffect, useState } from "react";
import { getRandomWord } from "./api";

export const CrashExample = () => {
  const [randomWord, setRandomWord] = useState<string | undefined>(undefined);

  const crash = () => {
    throw ('Something happen')
  }

  useEffect(() => {
    getRandomWord().then((res) => {
      setRandomWord(res[0]);
    }).catch(() => {
    })
  }, []);

  useEffect(() => {
    crash()
  }, [])

  if (!randomWord) {
    return <div>loading...</div>;
  }
  return (
    <>
      <h1 className="flex justify-center text-black text-9xl py-12">
        {randomWord}
      </h1>
    </>
  );
};
