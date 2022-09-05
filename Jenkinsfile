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
                    def (filename,filechecksum,filenameextn) = files[0].name.split('\\.')
                    echo "${filename}"
                    echo "${filechecksum}"
                    echo "${filenameextn}"
                    
                    def newBuildName = filename+"."+filechecksum+""],"
                    echo "${newBuildName}"
                    echo "------"
                    echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""

                    
                    
                   
                    
                     
                    //echo """${files[0].name} ${files[0].path} ${files[0].directory} ${files[0].length} ${files[0].lastModified}"""
                    
                    if (fileExists(dirOutput)) {
                         def data = readFile(file: 'build/sample_pr.js')
                        def updated = data.replaceAll("main.*", "${newBuildName}")
                        echo "${updated}"
                         println(data)
                    }
                    echo "i am here"
               
                   sleep 5
                    
                  
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
