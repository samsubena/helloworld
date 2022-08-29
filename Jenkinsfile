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
    }
    post {
             
        always {
            echo 'post build'
            
        }
     } 
}
