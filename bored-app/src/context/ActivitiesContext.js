import { createContext, useState, useEffect } from "react";
export const ActivityContext = createContext();

export default function ActivitiesContext({ children }) {
  const [activities, setActivities] = useState({});
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
      <ActivityContext.Provider value={{ activities: activities }}>
        {children}
      </ActivityContext.Provider>
    </div>
  );
}
