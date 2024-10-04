import { useEffect, useState } from "react";

interface IDebounceProps {
  searchValue: string;
  delay?: number;
}

export const useDebounce = ({ searchValue, delay = 2000 }: IDebounceProps) => {
  const [newSearchValue, setNewSearchValue] = useState<string>("");
  const [isLoadingDebounce, setIsLoadingDebounce] = useState<boolean>(false);

  useEffect(() => {
    if (!searchValue) {
      setNewSearchValue("");
      return setIsLoadingDebounce(false);
    }

    setIsLoadingDebounce(true);

    const timer = setTimeout(() => {
      setNewSearchValue(searchValue!);
      setIsLoadingDebounce(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return { newSearchValue, isLoadingDebounce };
};
