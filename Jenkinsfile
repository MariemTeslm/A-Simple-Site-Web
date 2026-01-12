pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t mysite .'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop mysite || true
                docker rm mysite || true
                docker run -d -p 80:80 --name mysite mysite
                '''
            }
        }
    }
}