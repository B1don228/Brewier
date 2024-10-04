import { useNavigate } from "react-router-dom";
import { useGetBrewiesListQuery } from "../../redux/api/barsApi";
import { LoadingComponent } from "../LoadingComponent";
import { BrewierComponent } from "./BrewierComponent";

import styles from "./styles.module.scss";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { actions as searchActions } from "../../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { ChangeEvent } from "react";
import { SelectorType } from "../../redux/store";
import { useDebounce } from "../../hooks/useDebounce";

export const ListComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state: SelectorType) => state.searchReducer.search
  );
  const { isLoadingDebounce, newSearchValue } = useDebounce({
    searchValue: searchValue!,
  });

  const { data, isLoading } = useGetBrewiesListQuery(1);

  const clickBrewierHandler = (id: string) => {
    navigate(`/${id}`);
  };
  const changeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(searchActions.changeSearch(event.target.value));
  };

  return (
    <LoadingComponent isLoading={isLoading}>
      <div className={styles.container}>
        <div className={styles.container_search}>
          <Input
            style={{
              color: "white",
              backgroundColor: "#2f2f2f",
              minHeight: "40px",
            }}
            suffix={<SearchOutlined color="white" />}
            onChange={changeSearchHandler}
            value={searchValue!}
          />
        </div>

        <ul className={styles.container_list}>
          <LoadingComponent
            isLoading={isLoadingDebounce}
            error="Brewier with this name is not found"
            isError={
              data?.filter((item) =>
                item.name.toLowerCase().includes(newSearchValue!.toLowerCase())
              ).length === 0
            }
          >
            {data
              ?.filter((item) =>
                item.name.toLowerCase().includes(newSearchValue!.toLowerCase())
              )
              .map((brewier) => (
                <BrewierComponent
                  key={brewier.id}
                  clickHandler={clickBrewierHandler}
                  {...brewier}
                />
              ))}
          </LoadingComponent>
        </ul>
      </div>
    </LoadingComponent>
  );
};
