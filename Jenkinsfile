pipeline {
    agent  any
    stages {
        
        
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        } 
        stage('Deploy') {
            steps {
                script{
                   sleep 10
                   def dirOutput = bat("dir /s /b build/static/js/")
                   echo dirOutput
                   
                }
            }
        } 
    }
    post {
             
        always {
            echo 'post build'
            
        }
     } 
}
