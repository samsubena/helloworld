pipeline {
    agent  any
    stages {
        stage('Install') {
            steps {
                bat 'npm install'
            }
        } 
        
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        } 
    }
    post {
             
        always {
            echo 'post build'
        }
     } 
}
