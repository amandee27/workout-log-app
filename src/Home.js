import Users from "./Users";
import useFetch from './useFetch';

const Home = () => {
    const {data} = useFetch('http://localhost:8000/users');

    return (  
        <div className="home">
            {data && <Users users={data} title="All users#"></Users>}
        </div>
     );
}
 
export default Home;