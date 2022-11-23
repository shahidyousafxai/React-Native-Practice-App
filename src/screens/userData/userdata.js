import React, {useState, useEffect} from 'react';
import { Text, Image, TouchableOpacity, View } from 'react-native';
import TopTabs from '../../components/topTabs/topTabs';
import ShopScreen from "./shopScreen";
import OutfitScreen from "./outfitScreen";
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { userStatApi } from "../../services/api/methods/userStat";
import { UserProfileApi } from "../../services/api/methods/userStat";


const UserData = () => {
  const [userShop, setUserShop] = useState(true);
  const [userInfo, setUserInfo] = useState({})
  const [userProfileInfo, setUserProfileInfo] = useState({})
  const [fullName, setFullName] = useState("")
  const [followers, setFollowers] = useState(0)
  const [followings, setFollowings] = useState(0)
  const [likes, setLikes] = useState(0)

  const userData = async() =>{
    // UserStat API
    const userId = await AsyncStorage.getItem("UserId");
    userStatApi(JSON.parse(userId)).then((res)=>{
      if(res.data.status === 200){
        setUserInfo(res.data)
        setFollowers(res.data.data.total_followers)
        setFollowings(res.data.data.total_following)
        setLikes(res.data.data.total_outfit_likes)
      }
      console.log(res.data.data)
    })
    .catch((err)=>{
      console.log(err)
    })

    // UserProfile API
    UserProfileApi().then((res)=>{
      if(res.data.status === 200){
        setUserProfileInfo(res.data)
        setFullName(res.data.data.full_name)
      }
      console.log(res.data.data.full_name)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  useEffect(()=>{
    userData();
  }, [])

  return (
    <View>
        <View>
            <TouchableOpacity
            style={styles.ProfileTag}
                >
                <Text
                  style={{
                      color: "red",
                    }}
                    >
                  Profile
                </Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Prof}>
            {/* <Image source={}/> */}
            <Text style={{marginBottom: 10}}>@Test User</Text>
            <Text>{fullName !== "" ? (`${fullName}`) : ("Test User")}</Text>
        </View>
        <View style={{flexDirection: "row", justifyContent: "space-around", backgroundColor: "lightgrey", marginTop: 100}}>
          <View style={styles.stats}>
            <Text>{likes}</Text>
            <Text>Likes</Text>
          </View>
          <View style={styles.stats}>
            <Text>{followers}</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.stats}>
            <Text>{followings}</Text>
            <Text>Following</Text>
          </View>
        </View>
        <View width="100%">
        <TopTabs setTabs={setUserShop} LeftTab="Shop" RightTab="Outfits"/>
        </View>
        <View style={{width: "100%", height: "100%"}}>
        {userShop ? (
          <ShopScreen
          />
        ) : (
          <OutfitScreen
          />
        )}
        </View>
    </View>
  )
}
export default UserData