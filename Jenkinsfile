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
            dir('/build/static/js/') {
                def files = findFiles() 
                files.each{ f -> 
                    if(f.directory) {
                    echo "This is directory: ${f.name} "
                    }
                }
            }
        }
     } 
}
