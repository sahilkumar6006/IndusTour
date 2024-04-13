import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import styles from './Style';
// import {Images} from '../../Assets/Images';
import Images from '../../Assets/Index';
import HeaderComponent from '../../Component/HeaderComponent';
import Card from '../../Component/Card';
import DesignCard from '../../Component/DesignCard';

const Home = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const[filteredData, setFilteredData] = useState()

  const [data, setData] = useState([
    {
      name: 'Engineering',
      image: '',
      title: 'Bachelor Of Engineering',
      isSelected: true,
      subCategory: [
       
        {
          title: 'Computer Science',
          image:
            'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Civil Engineering',

          image:
            'https://plus.unsplash.com/premium_photo-1677643917696-1962bffcff8f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Electronics & Comm. Engineering',
          image:
            'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Information Technology',
          image:
            'https://plus.unsplash.com/premium_photo-1683134033173-f43b86168498?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Mechanical Engineering',
          image:
            'https://images.unsplash.com/photo-1515272751348-25380c6c1f9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyb1NwYWNlJTIwZW5naW5lcmluZ3xlbnwwfHwwfHx8MA%3D%3D',
        },
        {
          title: 'Artificial Intelligence & Machine Learning',
          image:
            'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=1945&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD',
        },
      ],
    },
    {
      name: 'POLYTECHNIC',
      isSelected: false,
      subCategory: [
        {
          title: 'Computer Science',
          image:
            'https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Electrical Engineering',
          image:
            'https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Mechanical Engineering',
          image:
            'https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Civil Engineering',
          image:
            'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=1997&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      
      ],
    },
    {
      name: 'MANAGEMENT',
      isSelected: false,
      subCategory: [
        {
          title: 'MCA',

          image:
            'https://pimt.in/wp-content/uploads/2021/12/master-of-computer-applications-cover-min.jpg',
        },
        {
          title: 'MBA',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_nQCO2To-6dcIMa3qDN22dAvCusq9Ze1_JitVWvZhs9E_bDR1Prl4zHNnamuUXCNK-gs&usqp=CAU',
        },
        {
          title: 'BBA',
          image:
            'https://www.nshm.com/wp-content/uploads/2021/04/BBAGlobalBusiness-02.jpg',
        },
        {
          title: 'BCA',
          image:
            'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'B.Com Hons',
          image:
            'https://educrm.bitvaults.in/upload/Course/00000/00000036_emoflyzk65nq2.jpg',
        },
        {
          title: 'Hotel Management',
          image:
            'https://images.unsplash.com/photo-1540304453527-62f979142a17?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Travel & Tourism',
          image:
            'https://images.unsplash.com/photo-1500154040473-d91a2e21a6ea?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          title: 'Agriculture',
          image:
            'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
    },
    {
      name: 'LAW',
      isSelected: false,
      subCategory: [
        {
          title: 'BA LLB',
          image:'https://images.unsplash.com/photo-1592823908990-4688140172d5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            
        },
        {
          title: 'LLB',
          image:
            'https://gyanvitaranamlawcollege.com/media/course/BA-LLB-img.webp',
        },
       
      ],
    },
   
    {
      name: 'PHARMACY',
      isSelected: false,
      subCategory: [
        {
          title: 'B. Pharmacy',
          image:
            'https://www.chitkara.edu.in/wp-content/uploads/2022/01/b-pharammob.jpg',
        },
        {
          title: 'D. Pharmacy',
          image:
            'https://apcamritsar.ac.in/pharmacy.jpg',
        },
       
      ],
    },
    {
      name: 'PARAMEDICAL',
      isSelected: false,
      subCategory: [
        {
          title: 'B.Sc. (Medical Lab Science)',
          image:'https://plus.unsplash.com/premium_photo-1673953509957-3eddb52e70c2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            
        },
        {
          title: 'B.Sc. (Operation Theatre Technology)',
          image:
            'https://cache.careers360.mobi/media/presets/340X170/careers/banner_images/2020/7/20/Operation%20Theatre%20Technician.jpg',
        },
        {
          title: 'B.Sc. (Radiology Imaging & Technology)',
          image:'https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          title: 'B.Sc (Anesthesia & Operation Theatre Technology)',
          image: 'https://plus.unsplash.com/premium_photo-1663040222194-941d775ec225?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
           
        },
       
      ],
    },
  ]);

  const [subCategory, setSubCategory] = useState();

  useEffect(() => {
    setSubCategory([...data[0].subCategory]);
  }, []);

  const tapOnhandle = (item, index) => {
    let copyarr = [...data];
    for (let i = 0; i < copyarr.length; i++) {
      if (i === index) {
        copyarr[i].isSelected = !copyarr[i].isSelected;
        setSubCategory([...copyarr[i].subCategory]);
      } else {
        copyarr[i].isSelected = false;
      }
    }
    // console.log("isSelected is turned to true", copyarr)
    setData(copyarr);
  };

  const renderCategoryItem = ({item, index}) => {
    // console.log("in the render Item", item)

    return (
      <View>


      <TouchableOpacity onPress={() => tapOnhandle(item, index)}>
        <View
          style={[
            item.isSelected
              ? {
                  backgroundColor: '#008AB5',
                  margin: 5,
                  borderRadius: 10,
                  padding: 8,
                }
              : {
                  backgroundColor: 'white',
                  margin: 5,
                  borderRadius: 10,
                  padding: 8,
                },
          ]}>
          <Text style={{color: 'black'}}>{item.name}</Text>
        </View>
      </TouchableOpacity>
      </View>
    );
  };

  const taponCategory = (item, index) => {
    navigation.navigate('DetailComponent', {
      title: item.title,

    });
  };

  
  const handleSearch = (text) => {
    setSearchQuery(text)

    const filterdata = subCategory.filter((item) =>item.title.toLowerCase().includes(text.toLowerCase()))
    setFilteredData(filterdata);
  }

  const RenderCardItem = ({item, index}) => {
    return (
      <Card
        item={item}
        index={index}
        onPress={() => taponCategory(item, index)}
      />

    );
  };

  return (
    <View style={styles.rootContainer}>
    <View style={styles.profileContainer}>
        <View style={styles.profileInnerContainer}>
          <Image
            source={Images.sahiluser}
            style={styles.dummy_Profile_ic}
          />
          <Text style={styles.userNameText}>
            Hii {auth().currentUser.displayName} !
          </Text>
        </View>
        <TouchableOpacity>
        <Image source={Images.Ic_Bell} style={styles.ic_bell} />
        </TouchableOpacity>
      </View>
      <View style={styles.innerRootContainer}>
        <Text style={styles.text}>Are You Ready to visit the </Text>
        <Text style={styles.text}> Industry's ? </Text>

        <View style={styles.container}>
          <Image
            source={Images.Search_ic}
            style={styles.icon}
          />
          <TextInput placeholder="Search" style={styles.input}
          value={searchQuery}
          onChangeText={handleSearch}
          />
          {/* <Image
            source={require('../../Assets/Images/Chat.png')}
            style={styles.icon}
          /> */}
        </View>

        <FlatList
          data={ data}
          keyExtractor={(item, index) => `${index}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderCategoryItem}
        />

<View style={styles.batchesContainter}>
        <View>
          <Text style={styles.smallHeadingtxt}>Bachelor's Of Engineering</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.elementTextColor}>See all</Text>
        </TouchableOpacity>
      </View>

        <FlatList
          data={searchQuery !==  ''? filteredData:subCategory}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => `${index}`}
          renderItem={RenderCardItem}
        />
      </View>

      <DesignCard 
        title ='Let s Explore the Travel'
        desc ="Travel is younger sort is part of Education; in the older and part of Experience"
      />
    </View>
  );
};

export default Home;
