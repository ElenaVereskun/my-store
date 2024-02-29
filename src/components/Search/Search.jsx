import styles from "./search.module.css";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const Search = () => {
  return (
    <section>
      <form className={styles.form} /* onSubmit={handleSubmit} */>
        <div className={styles.quest}>
          <input
            className={styles.input}
            /*  value={searchValue} */
            name="search"
            /*  onChange={handleChangeSearch} */
            placeholder="Название товара"
          />
          <span></span>
          <button className={styles.button}>Поиск</button>
        </div>
        <div className={styles.short}>
          <FilterCheckbox
          /* onClickCheckbox={onClickCheckbox}
                        isShort={isShort}
                        handleChek={handleChek} */
          />
          <p className={styles.shortText}>Фильтровать хоть как-то</p>
        </div>
      </form>
    </section>
  );
};
export default Search;
