// && - AND operator - Both sides must be TRUE
// || - OR operator - Either can be true or false or both can be true or false. As long as one returns true code will run.

let isVerified = false;
let isLoggedIn = true;
let hasPaymentToken = true;
let isGuest = true;

if (isVerified && isLoggedIn && hasPaymentToken) {
    console.log ('Greeting message to user');
    console.log ('Grant access to paid course');
}else if (isVerified || isGuest) {
    console.log('Allow free previews');
}else{
    console.log('MESSAGE: please contact admin.');
}