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
                    def dirOutput = bat("dir /B ${'build/static/js/'}", returnStdout: true)
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
