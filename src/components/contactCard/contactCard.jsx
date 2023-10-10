export const Card = ({ name, number, onDelete, id }) => {
  return (
    <div>
      <span>{name} :</span>
      <span>{number} </span>

      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
