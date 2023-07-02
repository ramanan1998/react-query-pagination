import propTypes from "prop-types";

function User({user}) {
  return (
    <article style={{
        border: "1px solid red",
        margin: "10px",
        padding: "10px"
    }}>
        <div style={{
            height: "100px",
            width: "100px",
            borderRadius: "50%",
            overflow: "hidden"
        }}>
            <img style={{height: "100%", width: "100%", objectFit: "cover"}} src={user.avatar} alt="img" />
        </div>
        <h2>{user.first_name} {user.last_name}</h2>
        <p>{user.email}</p>
    </article>
  )
}

User.propTypes = {
    user: propTypes.object
}

export default User