import { IBrewie } from "../../../utils/types/requestTypes";

import styles from "./style.module.scss";

interface IBrewierComponentProps extends IBrewie {
  clickHandler: (id: string) => void;
}

export const BrewierComponent = ({
  id,
  name,
  street,
  country,
  city,
  clickHandler,
}: IBrewierComponentProps) => {
  return (
    <section className={styles.container} onClick={() => clickHandler(id)}>
      <div className={styles.container_name}>{name}</div>
      <div className={styles.container_street}>
        {country}, {city}, {street}
      </div>
    </section>
  );
};
