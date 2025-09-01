pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'percomms'
        IMAGE_NAME = "${DOCKERHUB_USER}/reactdash"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/jrodriguezneira/dashboard-sync.git'
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
                # Apply deployment (in case of first run or new resources)
                kubectl apply -f k8s/deployment.yaml
                
                # Update image for rolling update
                kubectl set image deployment/reactdash reactdash=${DOCKERHUB_USER}/reactdash:${BUILD_NUMBER} --record
                
                # Optional: expose service (if NodePort ever changes)
                kubectl expose deployment reactdash --type=NodePort --name=reactdash-service --port=5000 --target-port=80 || true
                """
            }
        }
    }
}
