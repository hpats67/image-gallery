import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

const app = angular.module('image', [components, services]);

const dev = 'http://localhost:3500/api';

app.value('apiUrl', dev);