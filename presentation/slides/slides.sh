#!/bin/bash

source ./components.sh

function intro() {
  vmargin 25
  green title Promises
}

function codigo_assincrono() {
  vmargin 15
  que_pasa Assincrono?
}

function porque_promise() {
  vmargin 15
  que_pasa Porque Promises?
}

function razoes_de_usar_promises() {
  bold bullet_thin Alternativa a Callbacks
  bold bullet_thin Menos piramides
  bold bullet_thin Melhor suporte para testes
}

function o_que_e_promise() {
  vmargin 15
  que_pasa O que sao Promises?
}

function explicando_promise() {
  bold bullet_thin Padrao de projeto
  bold bullet_thin O resultado de uma acao assinc.
  bold bullet_thin Que pode ter sido completada
  bold bullet_thin Ou pode ter falhado
}

function estados_da_promise() {
  green title Estados de uma promise
  bold bullet_thin Pendente
  bold bullet_thin Resolvida
  bold bullet_thin Rejeitada
}

function usando_promise() {
  vmargin 15
  que_pasa Usando Promises
}

function the_end() {
  telnet towel.blinkenlights.nl
}
