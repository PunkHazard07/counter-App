import React from 'react'

const ProfileCard = ({userName, imageURL, githubLink}) => {
    const styles = {
        container: {
        padding: '8px',
        margin: '8px',
        border: '2px solid black',
        },
        img: {
            width: "200px",
            height: "200px",
            borderRadius: '16px',
        }
    }
  return (
    <div style={styles.container}>
        <img style={styles.img} src={imageURL || "https://avatars.githubusercontent.com/u/1?v=4"} alt="" />
        <h3>UserName: {userName || "user"}</h3>
        <p>Github link: <a href={githubLink}>Visit</a> </p>
    </div>
  )
}

export default ProfileCard