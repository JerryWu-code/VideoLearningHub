import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const client_id = "316019998539-8rm0k1tq9p6e85f9q1umi3qu6auhnbts.apps.googleusercontent.com";

async function graphQLFetch(query, variables = {}) {
    try {
        const response = await fetch('http://127.0.0.1:8000/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Server error response: ${errorText}`);
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();

        if (result && result.errors) {
            const error = result.errors[0];
            if (error.extensions && error.extensions.code === 'BAD_USER_INPUT') {
                const details = error.extensions.exception ? error.extensions.exception.errors.join('\n ') : '';
                alert(`${error.message}:\n ${details}`);
            } else {
                alert(`${error.extensions ? error.extensions.code : 'Error'}: ${error.message}`);
            }
            return null; // Return null if there's an error in the GraphQL response
        }

        return result.data;
    } catch (e) {
        alert(`Error in sending data to server: ${e.message}`);
        console.error(`Fetch error: ${e.message}`);
        return null; // Return null in case of network or parsing errors
    }
}


function Login() {
    const onSuccess = async (res) => {
        console.log("LOGIN SUCCESS! Raw response:", res);
        try {
            // Decode JWT token to get user information
            const decodedToken = jwtDecode(res.credential);
            // console.log("User Information:", decodedToken);
            // Extract user info from the decoded token
            const userProfile = {
                id: decodedToken.sub,
                fullName: decodedToken.name,
                email: decodedToken.email,
            };
            console.log("User Profile:", userProfile);
            await addUser(userProfile);
        } catch (error) {
            console.error("Error decoding token or sending data:", error);
        }
    };

    const addUser = async (userProfile) => {
        const mutation = `
        mutation AddUser($User: InputUser!) {
          addUser(User: $User) {
            id
            fullName
            email
          }
        }
        `;

        const variables = { User: userProfile };

        const response = await graphQLFetch(mutation, variables);

        if (!response) {
            console.error("No response from server.");
            alert("Failed to add user due to a server error.");
            return;
        }

        if (response.addUser) {
            alert('User added successfully.');
        } else {
            alert('An unexpected error occurred while adding the user.');
        }
    };


    const onFailure = (error) => {
        console.error("LOGIN FAILED:", error);
        alert("Login failed. Please try again.");
    };

    return (
        <GoogleOAuthProvider clientId={client_id}>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
            />
        </GoogleOAuthProvider>
    );
}

export default Login;