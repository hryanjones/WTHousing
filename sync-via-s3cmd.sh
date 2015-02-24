#! /bin/bash

s3cmd --exclude=".git*" --no-check-md5 sync ~/Documents/github/WTHousing/ s3://hryanjones.com/tmp/WTHousing/
