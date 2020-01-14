#!/usr/bin/env bash

read -p "Continue $1 (Y/N)?" choice
case "$choice" in
  [Yy]|[Yy][Ee][Ss] ) exec $2;;
  n|N ) echo "no";;
  * ) echo "invalid";;
esac