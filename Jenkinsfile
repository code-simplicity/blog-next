pipeline {
  agent none
  stages {
    stage('blog') {
      steps {
        sh '''chmod -R 777 build.sh
sh build.sh'''
      }
    }

  }
}