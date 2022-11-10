import React from 'react';
import './Myblog.css'
const MyBlog = () => {
    return (
        <div className='blogs'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-amber-600 uppercase rounded-full bg-teal-accent-400">
                                Brand new
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-amber-600 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                        width="52"
                                        height="20"
                                    />
                                </svg>
                                <span className="relative blogs">{' '}  Welcome</span>
                            </span>{' '}
                          <span className=" blogs">  to the blog of Gulshan Travels!!</span>
                        </h2>
                        <p className="text-base text-white md:text-lg">
                            Your one-stop travel site for your dream vacation. Bundle your stay with a car rental or flight and you can save more. Search our flexible options to match your desire
                        </p>
                    </div>
                </div>
                <div className="max-w-screen-xl sm:mx-auto">
                    <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-2xl text-amber-600 font-medium">
                                    What are the differences between SQL and NoSQL?
                                </p>
                                <p className="text-white">
                                    SQL databases manipulate data (SQL). Powerful wording. SQL is versatile and widely-used, therefore it's safe for complex queries. Restrictive. SQL schemas define data structure. Data must be consistent. This requires upfront labor, making structure changes complex and disruptive.


                                    <br />
                                    <br />
                                    NoSQL holds dynamic unstructured data. Document, column, graph, or KeyValue-oriented data. This flexibility allows unstructured documents. Unique document structure. We can add fields as needed, and database syntax varies.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-2xl text-amber-600 font-medium">
                                What is JWT, and how does it work?
                                </p>
                                <p className="text-white">
                                    JWT, which stands for JSON Web Token, is an open standard that lets a client and a server share security information. Each JWT has a set of claims that are encoded as JSON objects. JWTs are signed with a cryptographic algorithm to make sure that the claims can't be changed after the token is issued.

                                    <br />
                                    <br />
                                    JWTs are different from other web tokens because they have a set of claims inside them. Claims are used to send information from one party to another. How these claims are used determines what they are. For example, a claim could say who gave the token, how long it is good for, or what permissions the client has been given.
                                    JWT is made up of three parts:
                                    The message has a header and a payload.
                                    The signature.
                                </p>
                            </div>
                           
                        </div>
                        <div className="space-y-8">
                            <div>
                                <p className="mb-4 text-2xl text-amber-600 font-medium">
                                	What is the difference between javascript and NodeJS?
                                </p>
                                <p className="text-white">
                                Javascript is a lightweight, object-oriented scripting language used to create interactive HTML pages. JavaScript is utilized in game and app development. It's an interpreted scripting language that runs only in a web browser. Node.js runs code outside the browser. It's a client-side and server-side browser language. Netscape's Brendan Eich created it in 1995. LiveScript was called JavaScript. C influences JavaScript's syntax. JavaScript files are.js.


                                    <br />
                                    <br />
                                    Node.js is a cross-platform, open-source JavaScript runtime environment. Node.js runs JavaScript outside the browser. Node.js is a web development language with several modules. Windows, Linux, Mac OS, etc. are supported. It provides a cross-platform runtime environment for constructing scalable server-side JavaScript apps.
                                </p>
                            </div>
                            <div>
                                <p className="mb-4 text-2xl text-amber-600 font-medium">
                                	How does NodeJS handle multiple requests at the same time?
                                </p>
                                <p className="text-white">
                                Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests. The EventQueue's listener is the EventLoop.


                                    <br />
                                    <br />
                                    The event loop would handle the request itself and send the response back to the client by itself if NodeJS can process the request without I/O blocking. However, you can handle numerous requests concurrently by utilizing the worker threads or NodeJS cluster modules.
                                </p>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlog;