import React, {useState, useEffect} from 'react';
import { View, ScrollView} from 'react-native';
import InspireCard from "../../components/inspireCard/inspireCard";
import {inspireApi} from "../../services/api/methods/inspire";

const InspireScreen = () => {
  const [inspireData, setInspireData] = useState([])
  const [inspirePage, setInspirePage] = useState(1)

  const inspireFunc = async() =>{
      await inspireApi(inspirePage).then((res)=>{
        setInspireData(res.data.data.result)
      }).catch((err)=>{
        console.log(err)
      })
  }

  useEffect(()=>{
    inspireFunc(inspirePage)
  }, [inspirePage])
 
        const card = inspireData.map((data)=>{
          return(
            <View key={data.outfit.id} style={{justifyContent: "center", alignItems: "center"}}>
              <InspireCard userName={data.user.username} followers={data.user.total_followers} title={data.outfit.name} image={data.outfit.img_url}/>
            </View>
            )
        })

  return (
    <ScrollView>
        {card}
        {/* <Button title="Logout" onPress={async()=>{ await AsyncStorage.setItem("token", "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2NjkwMjk0MjksImV4cCI6MTY3MTYyMTQyOSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImVtYWlsIjoiU2hhaGlkYmFoYWR1ckBnbWFpbC5jb20ifQ.p3DudSMFcHLwD1xZv0h5UFULNPaIUmOAHMWhxky1o7AmjFy5ldZXf7fFixTogYIgxslKadgylE8BoDEycHnMwQsuRLVmCoobteJ64fPIJ-eIlzunZPxhkBZSuaeEEW7bW_rLKbuJS95Y9J2NLFFqIAiX4GQnqzw7CMyxNtuFPv-9v06HSgy4sHGypIwQJ-xS1jgZCU094Rl7vi89AGYt5EBj5S1IWJSr1hhKct5mw-C1LSaRurR387vd5KBWHGYIoDpT8KUHMVjzwH9NKjPy8kGENs86eNPlyIJm-qo82Gm9Xjc1NgVc-LSvRFtOUTF74jTio3f3Ezz2UxmLDf9AeQ")}}/> */}
    </ScrollView>
  )
}

export default InspireScreen