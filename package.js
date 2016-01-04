Package.describe({
  name: 'momentus:winston-kafka',
  version: '0.0.1',
  summary: 'A Kafka transport for winston',
  git: 'https://github.com/Pacopag/meteor-winston-kafka.git',
  documentation: 'README.md'
});

Npm.depends({
  "winston": "0.7.3",
  "winston-kafka-transport": "0.1.6"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.addFiles('winston-kafka.js','server');
  api.export('Winston_Kafka');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('momentus:winston-kafka');
  api.addFiles('winston-kafka-tests.js');
});
