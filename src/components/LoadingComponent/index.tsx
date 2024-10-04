import { ReactNode } from "react";
import { BarLoader } from "react-spinners";

import styles from "./style.module.scss";
import { COLORS } from "../../contants/COLORS";

interface LoadingComponentProps {
  isLoading?: boolean;
  isError?: boolean;
  children?: ReactNode;
  error?: string;
}

export const LoadingComponent = ({
  children,
  isLoading,
  isError,
  error,
}: LoadingComponentProps) => {
  return (
    <section>
      {!isLoading && isError && (
        <div className={styles.error}>
          {error ? error : "Oops, some error occured :("}
        </div>
      )}
      {isLoading ? (
        <BarLoader
          className={styles.loader}
          loading={isLoading}
          color={COLORS.PRIMARY_ORANGE}
        />
      ) : (
        children
      )}
    </section>
  );
};
