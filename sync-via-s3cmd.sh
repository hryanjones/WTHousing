#! /bin/bash

s3cmd --exclude=".git*" sync ~/Documents/github/WTHousing/ s3://hryanjones.com/tmp/WTHousing/
s3cmd -m "text/css" put assets/styles/theme.css  s3://hryanjones.com/tmp/WTHousing/assets/styles/theme.css  # should probably figure out why it's setting the mime-type wrong :(
