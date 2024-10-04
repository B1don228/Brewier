import { useParams } from "react-router-dom";
import { useGetBrewierInfoQuery } from "../../redux/api/barsApi";
import { LoadingComponent } from "../../components/LoadingComponent";

import styles from "./style.module.scss";

export const BrewierInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetBrewierInfoQuery(id, {
    skip: !id,
  });

  return (
    <LoadingComponent
      isLoading={isLoading}
      isError={data?.length === 0}
      error={"Brewier is not found"}
    >
      <div className={styles.container}>
        <div className={styles.container_title}>{data?.[0]?.name}</div>
        <div className={styles.container_info}>
          {data?.[0]?.brewery_type && (
            <div className={styles.container_type}>
              Brewery Type: {data[0].brewery_type}
            </div>
          )}
          {data?.[0]?.state && (
            <div className={styles.container_location}>
              {data[0].country}, {data[0].state}, {data[0].address_1}
            </div>
          )}
        </div>
        {data?.[0]?.website_url && (
          <div className={styles.container_website}>
            Website URL:{" "}
            <a href={data[0].website_url} target="_blank">
              {data[0].website_url}
            </a>
          </div>
        )}
      </div>
    </LoadingComponent>
  );
};
