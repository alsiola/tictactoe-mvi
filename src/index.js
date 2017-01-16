import { run } from '@cycle/xstream-run'
import { makeDOMDriver } from '@cycle/dom'
import App from './App/app'

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(App, drivers)
