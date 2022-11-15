import { useEffect, useState } from "react";

export default function Activities() {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => {
        return response.json();
      })
      .then((json) => setActivities(json));
  }, []);
  console.log(activities);
  return (
    <div>
      <h1>Activities</h1>
      {activities.map((activ) => (
        <div>
          <h2> {activ.activity}</h2>
        </div>
      ))}
    </div>
  );
}
