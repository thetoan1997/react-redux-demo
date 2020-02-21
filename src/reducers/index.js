import {combineReducers} from 'redux';
import projects from './projects';
import users from './users';
import 'bootstrap/dist/css/bootstrap.css';

export default combineReducers({
	projects,
	users
});