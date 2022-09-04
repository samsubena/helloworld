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
                                        
                   def dirOutput = bat("dir/s/b main.*.js ")
                     echo dirOutput
                    def files = findFiles(glob:dirOutput)
                    

                    echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""
                    echo "i am here"
               
                   sleep 10
                    
                   def data = readFile(file: 'build/sample_pr.js')
                   println(data)
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
