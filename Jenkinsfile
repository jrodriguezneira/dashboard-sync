pipeline {
    agent any

    environment {
        CI = 'false'                     // Prevent CRA from failing on warnings
        SKIP_PREFLIGHT_CHECK = 'true'    // Skip preflight/lint errors
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("percomms/reactdash:latest")
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        docker.image("percomms/reactdash:latest").push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh "kubectl apply -f deployment.yaml"
            }
        }
    }
}
