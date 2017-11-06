#!/bin/bash

source ./components.sh

function intro() {
  vmargin 25
  green title Promises
}

function porque_promise() {
  vmargin 15
  que_pasa Porque Promises?
}

function razoes_de_usar_promises() {
  bold bullet_thin Callbacks repensados
  bold bullet_thin Por pessoas com tendinite
  bold bullet_thin Menos codigo
  bold bullet_thin Mais legibilidade
}

function o_que_e_promise() {
  vmargin 15
  que_pasa O que sao Promises?
}

function explicando_promise() {
  bold bullet_thin O resultado de uma acao asinc.
  bold bullet_thin Que pode ter sido completada
  bold bullet_thin Ou pode ter falhado
}

function estados_das_promises() {
  green title Estados de uma promise
  bold bullet_thin Pendente
  bold bullet_thin Resolvida
  bold bullet_thin Rejeitada
}

function lidando_com_uma_promise() {
  green title Utilizando uma Promise
}

function the_end() {
  telnet towel.blinkenlights.nl
}
