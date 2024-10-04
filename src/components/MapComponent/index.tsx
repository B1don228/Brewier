import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Col, Input, Row } from "antd";

import styles from "./style.module.scss";
import { useGetAllBrewiesMapQuery } from "../../redux/api/barsApi";
import { LoadingComponent } from "../LoadingComponent";
import { IBrewie } from "../../utils/types/requestTypes";
import { useNavigate } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions as searchActions } from "../../redux/slices/searchSlice";
import { SelectorType } from "../../redux/store";

export const MapComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state: SelectorType) => state.searchReducer.search
  );

  const { data, isLoading } = useGetAllBrewiesMapQuery();

  const clickMarkerHandler = (brewier: IBrewie) => {
    navigate(`/${brewier.id}`);
  };

  const changeSearchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    return dispatch(searchActions.changeSearch(event.target.value));
  };

  return (
    <LoadingComponent isLoading={isLoading}>
      <div className={styles.container}>
        <div className={styles.container_input}>
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
        <APIProvider apiKey={"AIzaSyDCXtAQ82G7nb-j1Plkx1CE863ZFvkIfKM"}>
          <Row
            justify="center"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <Col xs={18} sm={20} md={24} lg={24}>
              <div className={styles.container_map_container}>
                <Map
                  defaultCenter={{
                    lat: 37,
                    lng: -97,
                  }}
                  defaultZoom={4}
                >
                  {data
                    ?.filter((item) =>
                      item.name
                        .toLowerCase()
                        .includes(searchValue!.toLowerCase())
                    )
                    ?.map((brewier) => {
                      if (!brewier.latitude || !brewier.longitude) return;
                      return (
                        <Marker
                          onClick={() => clickMarkerHandler(brewier)}
                          key={brewier.id}
                          position={{
                            lat: +brewier?.latitude,
                            lng: +brewier?.longitude,
                          }}
                        />
                      );
                    })}
                </Map>
              </div>
            </Col>
          </Row>
        </APIProvider>
      </div>
    </LoadingComponent>
  );
};
