import React, { useMemo } from 'react';
import { TextInput, View} from 'react-native';
import { useDispatch } from 'react-redux'
import { setusername } from '../../redux/action';

const SearchComponent = React.memo(() => {
    const dispatch = useDispatch()
    
    const setname = (text) => dispatch(setusername(text));


    return (
        <View>
            <TextInput style={styles} onChangeText={setname} />
        </View>
    )
})

const styles = {
    height: 40,
     borderColor: 'gray',
      borderWidth: 1
}

export default SearchComponent