const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://10.0.8.139:9000/',
    token : "sqa_3139406c17f53f917a8dad3121b6ed03b95f2201",
    options: {
      'sonar.projectName': 'assi6',
      'sonar.projectDescription': 'Description for "My App" project...'
    }
  },
  () => process.exit()
)
