#!/bin/sh

rsync -avze 'ssh -p 22' --delete public_html/ linode:www/lukekarrys.com/public_html/
