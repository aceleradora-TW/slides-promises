#!/bin/bash

source ./slides.sh

LAST_SLIDE=1
SLIDE_COUNT=6

function show_slide() {
  SLIDE_NUMBER=$1
  clear

  case $SLIDE_NUMBER in
    1)
      intro
    ;;
    2)
      porque_promise
    ;;
    3)
      razoes_de_usar_promises
    ;;
    4)
      o_que_e_promise
    ;;
    5)
      explicando_promise
    ;;
    6)
      estados_das_promises
    ;;
    *)
      show_slide $LAST_SLIDE
    ;;
  esac
}

function jump_to_slide() {
  LAST_SLIDE=$1
  show_slide $LAST_SLIDE
}


function first_slide() {
  LAST_SLIDE=1
  show_slide $LAST_SLIDE
}

function next_slide() {
  if [[ ! "$LAST_SLIDE" = "$SLIDE_COUNT" ]]; then
    LAST_SLIDE=$((LAST_SLIDE+1))
    show_slide $LAST_SLIDE
  fi
}

function previous_slide() {
  if [[ ! "$LAST_SLIDE" = "1" ]]; then
    LAST_SLIDE=$((LAST_SLIDE-1))
    show_slide $LAST_SLIDE
  fi
}
