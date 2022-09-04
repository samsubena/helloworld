pipeline {
    agent  any
    stages {
        
        
        stage('Deploy') {
            steps {
                script{
                   sleep 5
                                        
                   def _dirOutput = bat("dir/s/b main.*.js ")
                   fbname=$(basename "$_dirOutput" | cut -d. -f1)

                     echo  fbname
                    
                    
                   
                    
                     
                    //echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""
                    
                    if (fileExists(_dirOutput)) {
                            echo "File src/main/rersources/index.html found!"
                
                    }
                    echo "i am here"
               
                   sleep 5
                    
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
