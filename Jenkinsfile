pipeline {
    agent any

    environment {
        // Keeps your image name consistent across all stages
        DOCKER_IMAGE = 'kayesu/my-web-app'
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'
    }

    stages {

        stage('Checkout') {
            steps {
                echo "Cloning the repository if it doesn't exist..."
                bat '''
                if not exist ".git" (
                    git clone https://github.com/kayesu/my-web-app.git .
                ) else (
                    echo Repository already exists. Skipping clone.
                    git fetch --all
                    git reset --hard origin/main
                )
                '''
            }
        }

        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'dir' // Windows agent
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                // Add actual test commands here later (e.g., npm test)
            }
        }

        stage('Build and Push Docker Image') {
            steps {
                script {
                    // Use command line for build and tag for stability on Windows
                    bat "docker build -t ${DOCKER_IMAGE}:latest --no-cache ."
                    
                    // Use the correct Docker Hub registry URL and credentials for login
                    docker.withRegistry('https://registry.hub.docker.com', DOCKER_CREDENTIALS_ID) {
                        
                        // Use the command line push for stability
                        echo "Pushing Docker image: ${DOCKER_IMAGE}:latest"
                        bat "docker push ${DOCKER_IMAGE}:latest"
                    }
                }
            }
        }

        stage('Deploy to Local Docker Host') {
            steps {
                echo "Attempting to deploy image ${DOCKER_IMAGE}:latest"
                // Added logic to stop/remove containers gracefully
                bat """
                    docker stop my-web-app || echo "Container not running/stopped."
                    docker rm -f my-web-app || echo "No container to remove."
                    docker run -d --name my-web-app -p 8090:3000 ${DOCKER_IMAGE}:latest
                """
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully! App running on port 8090."
        }
        failure {
            echo "Pipeline failed. Check logs for the exact step failure."
        }
    }
}
