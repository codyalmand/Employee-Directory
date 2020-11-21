import React, { useState, useEffect } from "react";
import App from "./App"

const styles = {
    titleText: {
      fontSize: 20
    },
    tableText: {
      fontSize: 20,
      textAlign: "center",
      border: "solid",
      borderColor: "black",
      backgroundColor: "grey",
      padding: 10,
      paddingTop: 20,
    },
}

const Table = ({ users }) => {
  const [sortedUsers, updateSortedUsers] = useState([]);

  useEffect(() => updateSortedUsers(users), [users]);

  return (
    <div>
      <container style = {styles.tableText} className="tableText">
        <thead>
          <tr>
            <th style = {styles.titleText} className="titleText"
              scope="col"
              onClick={() => {
                const usersCopy = [...users];
                const updateSort = usersCopy.sort((a, b) => {
                  const nameA = a.name.first;
                  const nameB = b.name.first;

                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  }

                  return 0;
                });

                updateSortedUsers(updateSort);
              }}
            >
              <th scope="col" className="fn">First Name</th>
            </th>
            <th scope="col" className="ln"> Last Name</th>
            <th scope="col" className="email"> Email</th>
            <th scope="col" className="phone">Phone</th>
            <th scope="col" className="city">City</th>
            <th scope="col" className="state">State</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(
            ({
              location: { city, state },
              picture: { thumbnail },
              phone,
              email,
              name: { first, last }
            }) => (
              <tr key={email}>
                <th>{first}</th>
                <td>{last}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>
                  <img src={thumbnail} />
                </td>

                <td></td>
              </tr>
            )
          )}
        </tbody>
      </container>
    </div>
  );
};
export default Table;