---

linktitle: Best Logging Practices

title: Best logging practices to improve your application reliability
date: 2019-01-23


weight: 1

---

Logging helps to track events in our application and this tracking can be of great help while debugging.  
Following rules can help us do meaningful logging.  
 -  Contextual information must be present in logs. This includes timestamps, function name, filename, line numebr etc 
 -  Define accurate log levels. Log levels include `debug, trace, info, warn, error, fatal`.  
 -  Write meaningful logs that don't require deep understanding of the application.
 -  write logs in a format that's easily pasreable. 
 -  Log neither too much not too less but remember logs may be the only source of truth to figure out bugs while in production. 
 