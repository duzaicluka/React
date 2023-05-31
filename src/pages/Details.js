import './Details.css';

export const Details = () =>{
    return (
        <div>
            <div className='nav-bar-details'>
                <h1>Details Page</h1>
            </div>
            <div className='bodypage'>
                <h1>The internet's biggest collection of open source dog pictures.</h1>
                <div className='hero'>
                    <div className='aboutsection'>
                        <h2>ABOUT</h2>
                        <p>
                        Original dataset taken from the the Stanford Dogs Dataset. Logo thanks to NotKnifoon.
                        </p>
                    </div>
                    <div className='supportsection'>
                        <h2>SUPPORT US!</h2>
                        <p>
                        Do you care about accessing free images of dogs on the internet? Do you want your dog
                        pictures to be served at lightning fast speed with 99.999% uptime? Do you care about
                        DaaS (Dogs as a Service)? Help us pay our hosting bills and ensure that Dog API stays
                        free to access and use for everyone. We'll even gift you an executive business tie
                        for your pet (or small child) to say thanks.
                        </p>
                    </div>
                </div>
                <h2>PROJECTS MADE USING DOG API</h2>
                <ul>
                    <li>Tensorflow model trained on the dog.ceo image set and a web app to serve predictions</li>
                    <li>Node.js wrapper</li>
                    <li>Python client</li>
                    <li>Python wrapper</li>
                    <li>Furballs: A simple application to pull down a list of dog images.</li>
                    <li>Telegram bot</li>
                    <li>GraphQL</li>
                    <li>Polymer 2 webcomponent</li>
                    <li>Twitter bot that tweets a dog a day</li>
                    <li>polux.fr</li>
                    <li>Serverless Slack Commands. GitHub</li>
                    <li>Fetch! A Chrome extension that fetches a picture of a dog to display in your browser. GitHub</li>
                    <li>Doggie Browser</li>
                </ul>
            </div>
            <footer>
                <p>Created by Luka Dužaić</p>
            </footer>
        </div>
    )
}