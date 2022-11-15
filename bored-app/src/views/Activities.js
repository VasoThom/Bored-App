import { useContext } from "react";
import { ActivityContext } from "../context/ActivitiesContext";

export default function Activities() {
  const { activities } = useContext(ActivityContext);

  return (
    <div>
      <h1>Activities</h1>
      <div>
        <h2>Activity: {activities.activity}</h2>
        <p>accessibility :{activities.accessibility}</p>
        <p>price: {activities.price}</p>
        {activities.link ? <a href={activities.link}>link</a> : null}

        <p>key:{activities.key}</p>
      </div>
    </div>
  );
}
