import { useState, useEffect } from "react"
import ProfileCard from "./ProfileCard";

const ProfileList = () => {
  const styles = {
    container: {
      display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    padding: "58px",
    }
  }

  const [users, setUser] = useState([])
    //handle fetch users
    const handleFetch = async () => {
        const url = "https://api.github.com/users";
        try {
            const response = await fetch(url);
            const data = await response.json();
            setUser(data);
         
        } catch (error) {
        console.log(error);
        }
    }
    useEffect(() => {
        handleFetch();
    }, [])

  return (
    <div style={styles}>
      {users.map((user) => (
       <ProfileCard
        key={user.id}
        userName={user.login}
        imageURL={user.avatar_url}
        githubLink={user.html_url}
       />
      ))}
    </div>
  )
}

export default ProfileList