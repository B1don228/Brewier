import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import { Switch } from "antd";
import { COLORS } from "../../contants/COLORS";
import { useDispatch, useSelector } from "react-redux";
import { SelectorType } from "../../redux/store";
import { actions as brewierActions } from "../../redux/slices/brewiersSlice";
import { useLayoutEffect, useState } from "react";

export const Header = () => {
  const [visibleToggle, setVisibleToggle] = useState(false);

  const type = useSelector(
    (state: SelectorType) => state.brewiersReducer.brewiersType
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const clickTitleHandler = () => {
    navigate("/");
  };

  const changeTypeHandler = () => {
    return dispatch(brewierActions.changeBrewiersType());
  };

  useLayoutEffect(() => {
    if (window.location.pathname === "/") {
      return setVisibleToggle(true);
    }

    return setVisibleToggle(false);
  }, [window.location.pathname]);

  return (
    <header className={styles.container}>
      <div className={styles.container_leftSide} onClick={clickTitleHandler}>
        Brewie
      </div>
      {visibleToggle && (
        <div className={styles.container_mid}>
          Brewiers Type
          <Switch
            checked={type === "list" ? true : false}
            onChange={changeTypeHandler}
            checkedChildren="List"
            unCheckedChildren="Map"
            style={{
              backgroundColor:
                type === "list" ? "black" : COLORS.PRIMARY_ORANGE,
            }}
          />
        </div>
      )}
      <div className={styles.container_rightSide}>
        <p>
          <span className={styles.container_rightSide_title}>
            Phone number:
          </span>{" "}
          +420-642-124-51-92
        </p>
        <p>
          <span className={styles.container_rightSide_title}>Email:</span>
          brewie@gmail.com
        </p>
      </div>
    </header>
  );
};
