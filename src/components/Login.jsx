import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const client_id = "316019998539-8rm0k1tq9p6e85f9q1umi3qu6auhnbts.apps.googleusercontent.com";

function Login() {
    const onSuccess = async (res) => {
        console.log("LOGIN SUCCESS! Raw response:", res);
        try {
            // Decode JWT token to get user information
            const decoded = jwtDecode(res.credential);
            console.log("User Information:", decoded);
            // Extract user info from the decoded token
            const userProfile = {
                id: decodedToken.sub,
                fullName: decodedToken.name,
                givenName: decodedToken.given_name,
                familyName: decodedToken.family_name,
                imageUrl: decodedToken.picture,
                email: decodedToken.email,
            };

            console.log("User Profile:", userProfile);

            // Send user profile data to backend for storing in MongoDB
            await axios.post('http://localhost:8000/api/auth/google', userProfile);
            console.log("User data sent to backend");
        } catch (error) {
            console.error("Error decoding token or sending data:", error);
        }
    };

    const onFailure = (error) => {
        console.error("LOGIN FAILED:", error);
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