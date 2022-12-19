function OnCognitoSignUp() {

	var poolData = {
		UserPoolId: 'ap-northeast-1_W1o5gtCXI', // Your user pool id here
		ClientId: '56gvjfrbuih8bs67vs89qlv9p8', // Your client id here
	};
	var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

	var username = document.getElementById("email").value;
	var password = document.getElementById("password").value;

	userPool.signUp(username, password, null, null, function(
		err,
		result
	) {
		if (err) {
			alert(err.message || JSON.stringify(err));
			return;
		}
		var cognitoUser = result.user;
		console.log('user name is ' + cognitoUser.getUsername());
	});
}