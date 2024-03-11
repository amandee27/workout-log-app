import {Link} from 'react-router-dom';

const Users = ({users, title}) => ( <div className="users">
<h2>{title}</h2>
{
    users.map((user) => {
        return (<div className="user-preview" key={user.id}>
        <Link to={`/users/${user.id}`}>
            <h2>{user.username} j</h2>
        </Link>
        </div>);
    })
}
</div>)
 
export default Users;