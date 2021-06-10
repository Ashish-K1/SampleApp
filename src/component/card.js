export const Card = (props) => {
  return (
    <>
      <div className="card-div">
        {props.name}
        <button
          onClick={() => props.deleteCard(props.name)}
          className="cross-button"
        >
          X
        </button>
      </div>
    </>
  );
};
