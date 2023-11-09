import { FaBlogger } from "react-icons/fa";


const Blogs = () => {
    return (
        <div>
            <h1 className="font-semibold text-2xl  border-b-2 pb-1 flex items-center gap-1">
                <FaBlogger></FaBlogger>Access Token and Refresh Token
            </h1>
            <h2 className="font-semibold text-lg mb-5">
                Qsn: What are access token and refresh token? and should we store them on client side?
            </h2>
            <p className="font-light mb-5">
                Access tokens and refresh tokens are key components in authentication systems. An access token is a temporary credential that grants a client application permission to access a user's resources on a server. It's short-lived and provides a balance between security and usability. On the other hand, a refresh token is a longer-lived credential that can be used to obtain a new access token when the original one expires.

                Storing access tokens on the client side can be necessary for certain applications, like web or mobile apps, where the client needs to make authenticated requests to a server on behalf of the user. However, storing refresh tokens on the client side is generally discouraged due to security reasons. Refresh tokens should be kept confidential, usually stored on a secure server, to prevent unauthorized access. If an access token is compromised, its short lifespan limits the potential damage, but a leaked refresh token could lead to more severe security issues.
            </p>
            <h1 className="font-semibold text-2xl  border-b-2 pb-1 flex items-center gap-1">
                <FaBlogger></FaBlogger>Express.js And Nest.js
            </h1>
            <h2 className="font-semibold text-lg mb-5">
                Qsn: What is Express JS ? What Nest JS?
            </h2>
            <p className="font-light mb-5">
                Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It simplifies the process of building server-side applications by offering a straightforward and unopinionated approach, allowing developers to structure their projects as they see fit. Express.js is widely used for creating APIs and web servers and is known for its simplicity and ease of use.
            </p>
            <p className="font-light mb-5">
                Nest.js, on the other hand, is a progressive Node.js framework for building scalable and efficient server-side applications. It is built with TypeScript and takes advantage of its strong typing and other advanced language features. Nest.js follows a modular and opinionated architecture inspired by Angular, making it well-suited for building maintainable and scalable applications. It provides a set of abstractions and features, like dependency injection and decorators, that streamline development and promote code organization. Nest.js is particularly popular for building enterprise-level applications.
            </p>
            <h1 className="font-semibold text-2xl  border-b-2 pb-1 flex items-center gap-1">
                <FaBlogger></FaBlogger>Explaining my code!
            </h1>
            <h2 className="font-semibold text-lg mb-5">
                Qsn: How i write this Product ( TechJobBD )?
            </h2>
            <p className="font-light mb-5">
                "MERN" stands for MongoDB, Express.js, React, and Node.js, which are the key technologies used in this stack. MongoDB is a NoSQL database, Express.js is a web application framework for Node.js, React is a JavaScript library for building user interfaces, and Node.js is a runtime that allows you to run JavaScript on the server side.


            </p>
            <p className="font-light mb-5">
                In the context of "techjobbd," it suggests a project related to technology jobs in Bangladesh, possibly involving a job board or some platform for tech job listings. The backend, implemented with Node.js and Express.js, likely handles the server-side logic, communicates with the MongoDB database to store and retrieve job-related data.

                React, on the other hand, is used for the frontend, providing an interactive and dynamic user interface for users to interact with the job listings, search for jobs, and possibly submit applications.

                Overall, the MERN stack is powerful for building full-stack web applications, and "techjobbd" likely leverages these technologies to create a platform focused on technology job opportunities in Bangladesh. If you have specific code snippets or questions about a particular aspect of the project, feel free to share!
            </p>
        </div>
    );
};

export default Blogs;