import React, { useState } from "react";
import { TextMedium } from "./Text.js";
import {
    SubscribeRow,
    SubscribeField,
    StyledSubscribe,
    StyledSubscribeButton,
    SubscribeFieldsContainer,
} from "./style.js";
import { Column100 } from "./Column.js";
import { Heading } from "./Title.js";
const SubscribeButton = ({ buttonText, buttonLink }) => (
    <StyledSubscribeButton to={buttonLink}>
        {buttonText}
    </StyledSubscribeButton>
);
const Subscribe = () => {
    const [firstName, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = "https://api.hsforms.com/submissions/v3/integration/submit/14572677/5d66973c-17de-4897-97f3-72c4c0caa75e";
        // In var url above, replace portalId and formId with your values from HubSpot.
        // Example request JSON:
        var data = {
            submittedAt: Date.now(),
            fields: [
                {
                    name: "email",
                    value: email,
                },
                {
                    name: "firstname",
                    value: firstName,
                },
            ],
            context: {
                pageUri: "subscribe-success",
                pageName: "Subscribe successful",
            },
        };
        var final_data = JSON.stringify(data);
        xhr.open("POST", url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState == 4 && xhr.status == 400) {
                alert(xhr.responseText); // Returns a 400 error the submission is rejected.
            } else if (xhr.readyState == 4 && xhr.status == 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.
            } else if (xhr.readyState == 4 && xhr.status == 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found
            }
        };
        // Sends the request
        xhr.send(final_data);
    };
    
    return (
        <StyledSubscribe method="POST" action="/subscribe-success/" onSubmit={handleSubmit}>
            <SubscribeRow isCentered>
                <Column100 isFloating>
                    <Heading heading="Sign up for our newsletter" />
                    <TextMedium
                        textMedium="Receive actionable content strategy & marketing articles
                        directly in your inbox."
                        />
                    <SubscribeFieldsContainer>
                        <SubscribeField
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your email address*"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                            required="required"
                        />
                        <SubscribeField
                            type="text"
                            id="firstName"
                            name="firstName"
                            placeholder="Your name"
                            value={firstName}
                            onChange={ e => setFirstname(e.target.value)}
                        />
                        <SubscribeButton
                            buttonText="Sign up"
                            buttonLink=""
                        />
                    </SubscribeFieldsContainer>
                </Column100>
            </SubscribeRow>
        </StyledSubscribe>
    );
};
export default Subscribe;