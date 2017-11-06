#!/bin/bash

WIDTH=$(tput cols)

function h1() {
  figlet -w $WIDTH -f relief2 $@
}

function title() {
  figlet -w $WIDTH -c -f univers $@
}

function centered_h3() {
  figlet -w $WIDTH -c $@
}

function subtitle() {
  figlet -w $WIDTH -c $@
}

function fender() {
  figlet -w $WIDTH -c -f fender $@
}

function thin() {
  figlet -w $WIDTH -f thin $@
}

function vmargin() {
  SIZE=$1
  for i in `seq $SIZE`; do echo ""; done
}

function _paint() {
  COLOR_CODE=$1
  CONTENT="${@:2}"
  echo $'\e['$COLOR_CODE'm'
  eval $CONTENT
  echo $'\e[0m'
}

function green() {
  chalk green bold "$(eval $@)"
}

function inverse() {
  chalk inverse "$(eval $1)"
}

function que_pasa() {
  figlet -w $WIDTH -c -k -f univers "$@" | cowsay -n | chalk green bold
}

function bold() {
  _paint '0;1' $@
}

function bullet() {
  figlet -w $WIDTH -f fender "  - $@"
}

function bullet_thin() {
  figlet -w $WIDTH -f fender "   - $@"
}


