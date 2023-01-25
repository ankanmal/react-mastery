import { useState, useEffect } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("React OP from useEffect");
    }, 1000);
    //used the return below to clear setInterval
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Profile Component</h2>
    </div>
  );
};
export default Profile;
