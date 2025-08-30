pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'percomms'
        IMAGE_NAME = "${DOCKERHUB_USER}/reactdash"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/jrodriguezneira/dashboard-sync.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    appImage = docker.build("${IMAGE_NAME}:${BUILD_NUMBER}")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        appImage.push()
                        appImage.push("latest")
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh """
                kubectl apply -f k8s/deployment.yaml
                kubectl set image deployment/reactdash reactdash=${DOCKERHUB_USER}/reactdash:${BUILD_NUMBER}
                """
            }
        }
    }
}