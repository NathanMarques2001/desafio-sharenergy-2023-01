import './styles.css'

export function UserCard({ photo, username, name, age, email }: any) {
  return (
    <div className="Card">
      <img src={photo} alt="" className="Card-Photo" />
      <p className="Card-Username">{username}</p>
      <div className="Card-Container-Data">
        <p className="Card-Name">Nome: {name}</p>
        <p className="Card-Age">Idade: {age}</p>
        <p className="Card-Email">E-mail: {email}</p>
      </div>
    </div>
  )
}

export default UserCard
