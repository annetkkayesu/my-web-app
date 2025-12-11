(1)Define Environment Variables (Optional) pipeline { 
    agent any 
 
    environment { 
        DOCKER_IMAGE = 'dockerhub_username/my-web-app' 
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials'  // Jenkins credentials ID 
    } 
(2) Add a Build and Push Stage     stages { 
        stage('Build Docker Image') {             steps {                 script { 
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest") 
                } 
            } 
        } 
(3)Complete Jenkinsfile Example pipeline { 
    agent any 
 
    environment { 
        DOCKER_IMAGE = 'dockerhub_username/my-web-app' 
        DOCKER_CREDENTIALS_ID = 'docker-hub-credentials' 
    } 
 
    stages { 
        stage('Checkout') { 
            steps { 
                checkout scm 
            } 
        } 
 
        stage('Build Docker Image') {             steps {                 script { 
                    dockerImage = docker.build("${DOCKER_IMAGE}:latest") 
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
