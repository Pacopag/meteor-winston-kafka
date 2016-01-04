Meteor-Winston-Kafka
===============
A wrapper around [winston-kafka-transport](https://www.npmjs.com/package/winston-kafka-transport) for using [Kafka](http://kafka.apache.org/) transport with [winston](https://github.com/flatiron/winston.git) for [Meteor](http://meteor.com) 

This package closely follows [meteor-winston-loggly](https://github.com/tomrogers3/meteor-winston-loggly)

##Install
meteor add momentus:winston-kafka

##Usage

Winston is exposed as:

``` js
Winston
```

And kafka transport is exposed as:

``` js
Winston_Kafka
```

so it can be used as follows:

``` js
var options = {
  "level": "info",
  "connectionString": "<zookeeper connection string>",
  "topic": "<topic>",
  "clientId", "<clientId>",
  "zkOptions":"<zookeeper options>",
  "meta": "<default meta data>"
};

Winston.add(Winston_Kafka, options);
Winston.info('Added winston kafka transport');
```

See [winston-kafka-transport](https://www.npmjs.com/package/winston-kafka-transport) for more details.

Other related projects:

* [meteor-winston] (https://github.com/tomrogers3/meteor-winston)
* [meteor-winston-airbrake] (https://github.com/tomrogers3/meteor-winston-airbrake)
* [meteor-winston-loggly] (https://github.com/tomrogers3/meteor-winston-loggly)
