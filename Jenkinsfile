pipeline {
    agent  any
    stages {
        
        
        stage('Deploy') {
            steps {
                script{
                   sleep 5
                                        
                   def dirOutput = bat("dir/s/b main.*.js")
                   echo "${dirOutput}"
                   echo """\$(basename \${dirOutput})"""
                    
                    def files = findFiles(glob: '**/main.*.js')
                    println(files)
                   // def (W,X,Y,Z) = IP.split('\\.')
                    def (filename,filenamewithoutextn) = files[0].name.split('\\.')
                    echo "${filename}"
                    echo "${filenamewithoutextn}"
                    
                    echo "------"
                    echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""

                    
                    
                   
                    
                     
                    //echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""
                    
                    if (fileExists(dirOutput)) {
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
