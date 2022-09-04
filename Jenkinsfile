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
        stage('Deploy') {
            steps {
                script{
                   sleep 10
                                        
                      def data = readFile(file: 'build/sample_pr.js')
                      println(data)
                    
                    bat("cd build/static/js/")
                   def dirOutput = bat("dir/s/b main.*.js ")
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
