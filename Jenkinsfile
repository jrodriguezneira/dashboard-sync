pipeline {
    agent any

    environment {
        CI = 'false'
        SKIP_PREFLIGHT_CHECK = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_COMMIT = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                }
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                script {
                    def imageName = "percomms/reactdash:${env.GIT_COMMIT}"
                    docker.build(imageName)

                    docker.withRegistry('', 'dockerhub') {
                        docker.image(imageName).push()       // push commit hash tag
                        docker.image(imageName).push('latest') // optional latest tag
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                withEnv(["KUBECONFIG=/var/jenkins_home/.kube/config"]) {
                    script {
                        // Update deployment to use the new commit hash tag
                        sh """
                        kubectl set image deployment/reactdash reactdash=percomms/reactdash:${env.GIT_COMMIT} -n default
                        kubectl rollout status deployment/reactdash -n default
                        """
                    }
                }
            }
        }
    }
}
