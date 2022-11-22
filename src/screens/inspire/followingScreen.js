import React, {useState, useEffect} from 'react';
import { View, ScrollView, Text} from 'react-native';
import InspireCard from "../../components/inspireCard/inspireCard";
import { FollowingOutfitApi } from "../../services/api/methods/following";

const FollowingScreen = () => {
  const [followingData, setFollowingData] = useState([])
  const [followingPage, setFollowingPage] = useState(1)

  const followingFunc = async() =>{
      await FollowingOutfitApi(followingPage).then((res)=>{
        setFollowingData(res.data.data.result)
      }).catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    followingFunc(followingPage)
  }, [followingPage])
 
        const card = followingData.map((data)=>{
          return(
            <View key={data.outfit.id} style={{justifyContent: "center", alignItems: "center"}}>
              <InspireCard userName={data.user.username} followers={data.user.total_followers} title={data.outfit.name} image={data.outfit.img_url}/>
            </View>
            )
        })

  return (
    <ScrollView>
        {followingData.length ? (
          <>
          {card}
          </>
        ) : (
          <Text>
            You are not following anyone! 
          </Text>
        )}
    </ScrollView>
  )
}

export default FollowingScreen