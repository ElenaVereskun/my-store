import styles from "./filterCheckbox.module.css";

const FilterCheckbox = () => {
  return (
    <>
      <label className={styles.filterCheckbox}>
        <div className={styles.container}>
          <input
            className={styles.input}
            /*  onClick={onClickCheckbox}
            onChange={handleChek}
            checked={isShort} */
            type="checkbox"
          />
          <span className={styles.slider}></span>
        </div>
      </label>
    </>
  );
};
export default FilterCheckbox;
