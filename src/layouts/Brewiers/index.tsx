import { useSelector } from "react-redux";
import { SelectorType } from "../../redux/store";
import { ListComponent } from "../../components/ListComponent";
import { MapComponent } from "../../components/MapComponent";

export const Brewiers = () => {
  const { brewiersType } = useSelector(
    (state: SelectorType) => state.brewiersReducer
  );

  return brewiersType === "list" ? <ListComponent /> : <MapComponent />;
};
