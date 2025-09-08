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
                // Use Git commit hash as tag
                def gitCommit = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                docker.build("percomms/reactdash:${gitCommit}")
                docker.withRegistry('', 'dockerhub') {
                    docker.image("percomms/reactdash:${gitCommit}").push()
                }

                // Optionally update latest tag too
                docker.image("percomms/reactdash:${gitCommit}").push('latest')
            }
        }
    }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'dockerhub') {
                        docker.image("percomms/reactdash:${gitCommit}").push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withEnv(["KUBECONFIG=/var/jenkins_home/.kube/config"]) {
                    sh "kubectl apply -f k8s/deployment.yaml"
                }
            }
        }
    }
}
