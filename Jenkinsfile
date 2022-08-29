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
            def mainJSFiles
            
            dir('build/static/js/') {
                mainJSFiles = findFiles(glob: '**/.js')
            }
            echo mainJSFiles
            echo 'post build'
        }
     } 
}
