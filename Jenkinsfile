pipeline {
    agent any

    stages {

        stage('Build') {
            steps {
                echo "Building the project..."
                bat 'dir'
            }
        }

        stage('Test') {
            steps {
                echo "Running tests..."
                bat 'echo Tests completed'
            }
        }

        stage('Deploy') {
            steps {
                echo "Building and pushing Docker image to Docker Hub..."

                withCredentials([usernamePassword(
                    credentialsId: 'docker-hub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {

                    bat """
                    docker login -u %DOCKER_USER% -p %DOCKER_PASS%

                    docker build -t %DOCKER_USER%/my-web-app:latest .

                    docker push %DOCKER_USER%/my-web-app:latest

                    docker logout
                    """
                }
            }
        }
    }
}

        stage('Push to Docker Hub') {             steps {                 script { 
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_CREDENTIALS_ID) {                         dockerImage.push('latest') 

                    } 
                } 
            } 
        } 
    } 
