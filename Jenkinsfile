pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'your-dockerhub-username'
        DOCKERHUB_PASS = credentials('dockerhub-password-id') // Jenkins credentials
        IMAGE_NAME = "${DOCKERHUB_USER}/react-app"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/yourusername/your-react-repo.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-password-id') {
                        docker.image("${IMAGE_NAME}:latest").push()
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/deployment.yaml
                kubectl set image deployment/react-app react-app=${DOCKERHUB_USER}/react-app:latest
                '''
            }
        }
    }
}
