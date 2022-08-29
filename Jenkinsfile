pipeline {
    agent  any
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        } 
        
        stage('test') {
            steps {
                bat 'npm test '
            }
        } 
        
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        } 
    }
}
