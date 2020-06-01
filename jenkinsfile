pipeline {
    environment {
        registry = "fredysa/sample"
       
    }
    
    agent {
        docker {
            image 'fredysa/sample:1.5'
            args '-p 3000:3000'
            args '-w /app'
            args '-v /var/run/docker.sock:/var/run/docker.sock'
        }
    }

    options {
        skipStagesAfterUnstable()
    }

    stages {
        stage("Build"){
            steps {
                sh 'ls /home/jenkins-pipeline/'
                sh 'npm install'
                
            }
        }
        stage("Test"){
            steps {
                sh 'npm test'
            }
        }

        stage("Build & Push Docker image") {
            steps {
                sh 'docker image build -t fredysa/sample:2.0 .'
                
               
            }
        }

        stage('Deploy and smoke test') {
           steps{
                sh './jenkins/scripts/deploy.sh'
            }
        }

        stage('Cleanup') {
            steps{
            sh './jenkins/scripts/cleanup.sh'
            }
        }
        
    }
}