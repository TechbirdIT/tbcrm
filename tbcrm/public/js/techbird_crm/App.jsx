import * as React from "react";

export function App() {
  const dynamicMessage = React.useState("Hello from App.jsx");
  return (
    <div>
      <h3>{dynamicMessage}</h3>
      <h4>Start editing at tbcrm/public/js/techbird_crm/App.jsx</h4>
    </div>
  );
}