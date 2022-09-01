pipeline {
    agent  any
    stages {
        
        stage('Install') {
            steps {
                bat 'npm Install'
            }
        } 
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        } 
        stage('Deploy') {
            steps {
                script{
                   sleep 10
                   def props = readProperties  file: 'dir/build/static/js/'
                    echo props
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
