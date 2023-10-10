// import { Cont, Inp } from './filter.styled';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <div>
      <section>
        <h2> Find contacts by name</h2>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={evt => onChangeFilter(evt.target.value)}
        />
      </section>
    </div>
  );
};
