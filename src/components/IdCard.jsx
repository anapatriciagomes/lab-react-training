import ids from '../data/ids.json';

function IdCard() {
  const idsList = ids.map((id, index) => {
    return (
      <div key={index} className="id-card">
        <img src={id.picture} alt={`${id.firstName} ${id.lastName}`} />
        <div className="id-content">
          <p>
            <b>First Name: </b>
            {id.firstName}
          </p>
          <p>
            <b>Last Name: </b>
            {id.lastName}
          </p>
          <p>
            <b>Gender: </b>
            {id.gender}
          </p>
          <p>
            <b>Height: </b>
            {`${id.height}m`}
          </p>
          <p>
            <b>Birth: </b>
            {new Date(id.birth).toUTCString().slice(0, 17)}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1>Id Card</h1>
      <section id="ids-list">{idsList}</section>
    </div>
  );
}

export default IdCard;
