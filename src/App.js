import React, { useEffect, useState } from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import "./App.css";


const styles = {
  appTitle:{
  textAlign: "center"
  },
  titleInfo: {
    textAlign: "center",
  },
}


function App() {
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);

  return (
    <container className="App" styles={styles.appTitle} ><br></br>
      <h1 style={styles.appTitle} className="appTitle">Employee Directory</h1>
      <p style={styles.titleInfo} className="titleInfo">
        To filter by first name, please begin your search in the user input
        below.
      </p>
      <p className="searchWord">Search Name:
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} /></p>
    </container>
  );
}
export default App;
