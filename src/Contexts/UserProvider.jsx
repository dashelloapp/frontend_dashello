import axios from "axios";
import { useEffect, useState } from "react";
import UserContext from "./UserContext";

export const UserProvider = (props) => {

    const baseUrl = "http://localhost:3001/api/user/";

    let [isSignedIn, setIsSignedIn] = useState(localStorage.getItem("myUserToken"));
    let [user, setUser] = useState("");

    useEffect(() => {
        async function fetchData(id) {
            await getUser(id);
        }
        if (isSignedIn) {
            fetchData(parseJwt(isSignedIn).userId)
        };
    }, [isSignedIn]);

    // Takes the JWT token from local storage and returns the user's id.  Referenced from the JWT package in npm
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
          return JSON.parse(jsonPayload);
      }
/*{
  "user": {
    "email": "user2@example.com",
    "password": "password",
    "firstName": "John",
    "lastName": "Doe",
    "userType": "owner"
  },
  "organization": {
    "organization": "My Organization",
    "billing_address": {
      "street": "123 Main St",
      "city": "City",
      "state": "State",
      "zip": "12345"
    },
    "mailing_address": {
      "street": "456 Elm St",
      "city": "City",
      "state": "State",
      "zip": "67890"
    },
    "organizationType": "services"
    "phone_number": "1111111111"
     "card_information": {
      "card_number": "1234 5678 9012 3456",
      "expiration_date": "12/24",
      "cvv": "123"
    },
    "membership_plan": {
      "plan_name": "Gold",
      "price": 50.00
    }
  }
}
 */
    function createUser(org, first, last, email, password) {       
        let user = {
            "user": {
              "email": email,
              "password": password,
              "firstName": first,
              "lastName": last,
              "userType": "owner"
            },
            "organization": {
              "organization": org,
              "billing_address": {
                "street": "123 Main St",
                "city": "City",
                "state": "State",
                "zip": "12345"
              },
              "mailing_address": {
                "street": "456 Elm St",
                "city": "City",
                "state": "State",
                "zip": "67890"
              },
              "organizationType": "services",
              "phone_number": "1111111111",
               "card_information": {
                "card_number": "1234 5678 9012 3456",
                "expiration_date": "12/24",
                "cvv": "123"
              },
              "membership_plan": {
                "plan_name": "Gold",
                "price": 50.00
              }
            }
          }
        //{ email:email, password:password, firstName:first, lastName:last, organization:org };
        console.log(email, password)
        return axios.post(baseUrl, user)
            .then(response => {
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function signInUser(email, password) {
        let user = { email, password };
        console.log(email,password)
        return axios.post(`${baseUrl}/signin`, user)
            .then(response => {
                localStorage.setItem('myUserToken', response.data.token)
                setIsSignedIn(localStorage.getItem("myUserToken"))
                return new Promise(resolve => resolve(response.data));
            }
        );
    }

    function getUser(id) {
        let myHeaders = {
            Authorization: `Bearer ${localStorage.getItem('myUserToken')}`
        };

        return axios.get(baseUrl + id, { headers: myHeaders })
        .then(response => setUser(response.data));
        
    }

    return (
        <UserContext.Provider value={{
            createUser,
            signInUser,
            getUser,
            isSignedIn,
            setIsSignedIn,
            user
        }}>
            { props.children }
        </UserContext.Provider>
    )
}