import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

    const TodoList=({todos, toggleTodo})=>{
        
            return(
                <View>
                {todos.map(todo =>
                    <TouchableOpacity key={todo.id} onPress={()=>toggleTodo(todo.id)}>
                    <Text style={{
                        padding: 30,
                        color:'#000',
                        fontSize: 24,
                        textDecorationLine:todo.completed? 'line-through':'none'
                    }}>
                        {todo.text}
                    </Text>
                </TouchableOpacity>   
                )}
            </View>

            );
        
           
    }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  
});
export default TodoList;
