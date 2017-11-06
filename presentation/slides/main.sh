#!/bin/bash

source ./controls.sh

function transition() {
  read -n 1 TRANSITION_TYPE

  case $TRANSITION_TYPE in
    j)
      next_slide
    ;;
    k)
      previous_slide
    ;;
    q)
      clear
      exit 0
    ;;
  esac
}

if [[ -z "$1" ]]; then
  first_slide
else
  jump_to_slide $1
fi

while true; do
  transition
done

