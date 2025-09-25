# My Node.js App – Jenkins CI/CD Pipeline Example

A simple Node.js web application with automated CI/CD pipeline using Jenkins and Docker.

#### Features

Express.js web server

Automated testing with Jest

Docker containerization

CI/CD pipeline with Jenkins

Automatic Docker image builds, pushes to DockerHub, and deployment

### Project Structure
```
my-node-app/
├── test/
│   └── app.test.js       # Test files
├── Dockerfile            # Docker configuration
├── .dockerignore         # Docker ignore rules
├── Jenkinsfile           # Jenkins pipeline
├── index.js              # Main application file
├── package.json          # Node.js dependencies
└── README.md             # This file
```
### Prerequisites

Jenkins installed on Ubuntu server

Node.js 18+

Docker

GitHub account (for source code)

DockerHub account

### Local Development

1.Clone the repository:
```
git clone https://github.com/Bharathkumar Nilugal/my-node-app.git
cd my-node-app
```

2.Install dependencies:
```
npm install
```

3.Run tests:
```
npm test
```

4.Start the app locally:
```
npm start
```
#App available at http://localhost:3000

### Docker Usage

1.Build Docker image locally:
```
docker build -t my-node-app .
```

2.Run container:
```
docker run -p 3000:3000 my-node-app
```

3.Using the DockerHub image:
```
docker pull YOUR_DOCKERHUB_USERNAME/my-node-app:latest
docker run -p 3000:3000 YOUR_DOCKERHUB_USERNAME/my-node-app:latest
```
## Jenkins CI/CD Pipeline

### Pipeline Stages:

1.Checkout – Pull latest code from GitHub

2.Install Dependencies – npm ci

3.Run Tests – npm test

4.Build Docker Image – docker build

5.Push Docker Image – docker login & docker push

6.Deploy Container – Stop old container, run new one

#### Required Jenkins Credentials:

dockerhub-creds – DockerHub username/password or token

#### Trigger:

Pipeline runs automatically on GitHub push (with webhook configured)

Or manually via Jenkins → Build Now

### API Endpoint
```
GET /
```

#### Response:
```
{
  "ok": true,
  "message": "Hello from my-node-app"
}
```
### Verifying Deployment

1.Check running container:
```
docker ps
```

2.Test app:
```
curl http://<JENKINS_SERVER_IP>:3000
```

3.Verify DockerHub tags:

latest

Jenkins build number (e.g., 8)

### Contributing

1.Fork the repository

2.Create a feature branch

3.Make your changes

4.Add tests if needed

5.Ensure all tests pass

6.Submit a pull request

## License

MIT License – see LICENSE file for details

### Quick Summary

Node.js app with tests ✅

Dockerized ✅

Jenkins pipeline automates CI/CD ✅

Docker image pushed and deployed automatically ✅
