pipeline {
    agent any

    environment {
        IMAGE = "bharathnilugal26/my-node-app"
        DOCKERHUB_CREDENTIALS = 'dockerhub-creds' // ID of your DockerHub credentials in Jenkins
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${IMAGE}:${BUILD_NUMBER} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: "${DOCKERHUB_CREDENTIALS}", usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login --username "$DOCKER_USER" --password-stdin
                        docker tag ${IMAGE}:${BUILD_NUMBER} ${IMAGE}:latest
                        docker push ${IMAGE}:${BUILD_NUMBER}
                        docker push ${IMAGE}:latest
                    '''
                }
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f my-node-app || true
                    docker run -d --restart unless-stopped -p 3000:3000 --name my-node-app ${IMAGE}:latest
                '''
            }
        }
    }

    post {
        always {
            echo "Pipeline finished. Build: ${env.BUILD_NUMBER}"
        }
        success {
            echo "SUCCESS: Build ${env.BUILD_NUMBER} succeeded"
        }
        failure {
            echo "FAILURE: Build ${env.BUILD_NUMBER} failed"
        }
    }
}
