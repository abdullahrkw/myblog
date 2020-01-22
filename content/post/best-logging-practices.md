+++

title = "Best logging practices to improve your application reliability"
description = ""
date = 2020-01-23

tags = [
    "logging",
    "application reliability",
]
categories = [
    "software engineering",
]
+++

Logging helps to track events in our application and this tracking can be of great help while debugging. 
Following rules can help us do meaningful logging.
 - Contextual information must be present in logs. This includes timestamps, function name, filename, line numebr etc
 - Define accurate log levels. Log levels include `debug, trace, 