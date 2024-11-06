import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const client_id = "316019998539-8rm0k1tq9p6e85f9q1umi3qu6auhnbts.apps.googleusercontent.com";

function Login() {
    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user:", res);
    };

    const onFailure = () => {
        console.log("LOGIN FAILED!");
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