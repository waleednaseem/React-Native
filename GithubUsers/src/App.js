import React,{useEffect,useState} from 'react';
import {Text , View ,Button} from 'react-native'
import SearchComponent from './components/search component/SearchComponent'
import ListComponent from './components/ListComponent/ListComponent'
import {Provider} from 'react-redux'
import store from './redux/store'
import axios from 'axios';
import {useDispatch} from 'redux'

const dispatch=useDispatch()


const App = () => {
  const [name,setname]=useState('')
    const [follower,setfollower]=useState('')
    const [following,setfollowing]=useState('')
    const [respo,setrespo]=useState('')
    const [avatar,setavatar]=useState('')

  useEffect(()=>{
    axios.get(`https://developer.github.com/v3/users/`)
  .then(res => setData(res.data))
  }
  ,[]) 

  const username=dispatch({type:'SET_USER', username})
  
    const setData=({name,username,follower,following,respo,avatar})=>{
      setname=(name)
      setusername=(username)
      setfollower=(follower)
      setfollowing=(following)
      setrespo=(respo)
      setavatar=(avatar)
    }
    
  return (
    <>
        <View>
          <Provider store={store}>
            <Text style={githubHeading}>
              Github Search
            </Text>
            <SearchComponent  />
            <Button
              title='search'
            />
            <ListComponent/>
          </Provider>
        </View>
    </>
  );
};
const githubHeading={
  color:'red',
  fontSize: 30,
  padding:40,
  margin:40
}
const input={
  height: 40,
  width:'80%',
  borderColor: 'gray', 
  borderWidth: 1,
  marginLeft:'10%',
  marginRight:'10%',
  padding:'auto'
}


export default App;
