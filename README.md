La Reunion Maintenance Database
===

(c) 2014 Gatlin Johnson <gatlin@niltag.net>

0. LICENSE
---

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                        Version 2, December 2004

     Copyright (C) 2004 Sam Hocevar <sam@hocevar.net>

     Everyone is permitted to copy and distribute verbatim or modified
     copies of this license document, and changing it is allowed as long
     as the name is changed.

                DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
       TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

      0. You just DO WHAT THE FUCK YOU WANT TO.

1. Synopsis
---

This is a simple web frontend to the maintenance database at [La Reunion
Cooperative][lr].

2. App specifications
---

The client-side code is written with [AngularJS](http://angularjs.org) and
[Yeoman](http://yeoman.io). It is designed to communicate with the backend REST
service asynchronously.

When serving locally in development mode, the client side code communicates
with a fake HTTP backend and exchanges fake testing data. You may find the file
controlling this in `app/scripts/dev-mocks.js`.

The REST service is written with the [Django Rest Framework][drf]. That project
is located in the `server` directory.

**To update the client side code**: In your terminal, run `grunt --force` to
create a `dist/` directory. This should be copied or symlinked to
`server/maint/static/maint`.

3. Bugs? Questions? Ideas?
---

Please use the Issues feature on [the Github page][gh] or send an email to
<gatlin@niltag.net>.

If you have any brilliant ideas, please feel free to submit a pull request.

[lr]: http://lareunioncoop.org
[gh]: https://github.com/gatlin/LRMDB
[drf]: http://django-rest-framework.org
