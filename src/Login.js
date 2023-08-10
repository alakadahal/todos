import React, { useState } from "react";


function App() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const database = [
        {
            username: "admin",
            password: "admin"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = (event) => {

        event.preventDefault();

        var { uname, pass } = document.forms[0];


        const userData = database.find((user) => user.username === uname.value);


        if (userData) {
            if (userData.password !== pass.value) {

                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {

            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };


    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div>{errorMessages.message}</div>
        );


    const renderForm = (
        <div >
            <form onSubmit={handleSubmit}>
                <div >
                    <label>Username </label>
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div >
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div >
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    return (
        <div>
            <div >
                <div >Sign In</div>
                {isSubmitted ? <div> Login sucessful
                </div> : renderForm}
            </div>
        </div>
    );
}

export default App;
