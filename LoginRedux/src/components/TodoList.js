import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

    const TodoList=({todos, toggleTodo})=>{
            <View>
                {todos.map(todo =>
                    <TouchableOpacity key={todos.id} onPress={()=>toggleTodo(todo.id)}>
                    <Text style={{
                        fontSize: 24,
                        textDecorationLine:todo.completed? 'line-through':'none'
                    }}>
                        {todos.text}
                    </Text>
                </TouchableOpacity>   
                )}
            </View>

    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  
});
export default TodoList;
