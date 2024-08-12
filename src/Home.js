import Users from "./Users";
import useFetch from './useFetch';

const Home = () => {
    const {data} = useFetch('http://localhost:8000/users');

    return (  
        <div className="home">
            {/* {data && <Users users={data} title="All users#"></Users>} */}
            <h1>This is home page</h1>
        </div>
     );
}
 
export default Home;