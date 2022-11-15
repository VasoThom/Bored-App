import { createContext, useState } from "react";
const activityContext = createContext();

export default function ActivitiesContext({ children }) {
  const { activity } = useState(activityContext);
  return (
    <div>
      <activityContext.Provider value={{ activity: activity }}>
        {children}
      </activityContext.Provider>
    </div>
  );
}
