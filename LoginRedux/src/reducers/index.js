import {combineReducers} from 'redux';
import todos from './todos';
import VisibilityFilter from './VisibleTodos';

export default combineReducers(
    {
    todos,
    VisibilityFilter
    }
);