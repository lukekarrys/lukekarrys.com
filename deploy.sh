#!/bin/sh
#
# An example hook script that is called after a successful
# commit is made.
#
# To enable this hook, rename this file to "post-commit".

scp -r public_html/* linode:www/lukekarrys.com/public_html/

rsync -avze 'ssh -p linode' --delete public_html/ linode:www/lukekarrys.com/public_html/
