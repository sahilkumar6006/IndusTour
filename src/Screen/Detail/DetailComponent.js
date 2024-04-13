import { View, Text, FlatList, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
// import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';/
// import DesignCard from '../../Components/DesignCard';
// import HeaderComponent from '../../Components/HeaderComponent';
import HeaderComponent from '../../Component/HeaderComponent';
// import Card from '../../Components/Card';
import Card from '../../Component/Card'; 
import DesignCard from '../../Component/DesignCard';
import Images from '../../Assets/Index';


const DetailComponent = ({route, navigation}) => {
  const DATA = route.params
  // console.log("in the item  detailcomponent", DATA )


  const [detail, setDetail] = useState()
  const ElementData = [
    
    {
      "title": "Civil Engineering",
      "Industries": [
        {
          "title": "Punjab Infrastructure Development Board",
          "location": "Mohali, Punjab",
          "image": "https://images.unsplash.com/photo-1630394257979-0104638432aa?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          "rating": 4.5
        },
        {
          "title": "Punjab State Power Corporation Limited",
          "location": "Patiala, Punjab",
          "image": "https://www.cheggindia.com/wp-content/uploads/2023/05/PSPCL.png",
          "rating": 4.2
        },
        {
          "title": "Punjab Water Supply and Sewerage Board",
          "location": "Ludhiana, Punjab",
          "image": "https://www.projectsmonitor.com/wp-content/uploads/2021/10/Water-connections2.jpg",
          "rating": 4.0
        },
        {
          "title": "Punjab Urban Planning and Development Authority",
          "location": "SAS Nagar, Punjab",
          "image": "https://images.tribuneindia.com/cms/gall_content/2017/7/2017_7$largeimg04_Tuesday_2017_012640925.jpg",
          "rating": 4.7
        }
      ]
    },
    {
      "title": "Computer Science",
      "Industries": [
        {
          "title": "Artificial Intelligence",
          "description": "Focuses on developing intelligent machines capable of performing tasks that typically require human intelligence. It includes areas such as machine learning, natural language processing, computer vision, and robotics.",
          "exampleProjects": ["Image recognition systems", "Chatbots", "Autonomous vehicles"],
          "image": "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Software Engineering",
          "description": "Deals with the design, development, testing, and maintenance of software systems. It involves various methodologies, tools, and practices to ensure the quality and reliability of software products.",
          "exampleProjects": ["Web application development", "Mobile app development", "Enterprise software solutions"],
          "image": "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Data Science",
          "description": "Involves extracting insights and knowledge from large volumes of data using various techniques such as data mining, statistical analysis, machine learning, and visualization.",
          "exampleProjects": ["Predictive analytics", "Big data processing", "Data-driven decision-making"],
          "image": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Cybersecurity",
          "description": "Focuses on protecting computer systems, networks, and data from unauthorized access, attacks, and threats. It includes areas such as network security, cryptography, ethical hacking, and security policies.",
          "exampleProjects": ["Network intrusion detection systems", "Vulnerability assessments", "Security awareness training programs"],
          "image": "https://media.istockphoto.com/id/540848970/photo/hacker-attacking-internet.jpg?s=2048x2048&w=is&k=20&c=RbYLRkTB49Y01IqVSDML2Z-5iNZIHhGXHdjPIT8K59Q="
        },
        {
          "title": "Database Systems",
          "description": "Deals with the design, implementation, and management of databases to store, organize, and retrieve data efficiently. It includes relational databases, NoSQL databases, and database management systems.",
          "exampleProjects": ["Relational database design", "Data warehousing", "Database optimization"],
          "image": "https://images.unsplash.com/photo-1674049404913-2005c02245fa?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Computer Networks",
          "description": "Involves the study of communication protocols, network architectures, and distributed systems. It focuses on the design, implementation, and management of computer networks to facilitate data exchange and resource sharing.",
          "exampleProjects": ["LAN/WAN design", "Network security protocols", "Cloud computing architectures"],
          "image": "https://plus.unsplash.com/premium_photo-1683134238579-a7575f7eba35?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },


        // {
        //   "title": "Human-Computer Interaction",
        //   "description": "Studies the interaction between humans and computers, focusing on user interface design, usability testing, and user experience. It aims to improve the efficiency, effectiveness, and satisfaction of computer systems.",
        //   "exampleProjects": ["User interface prototyping", "Usability studies", "Accessibility design"],
        //   "image": "https://example.com/human_computer_interaction.jpg"
        // },
        // {
        //   "title": "Parallel and Distributed Computing",
        //   "description": "Deals with the design and implementation of algorithms and systems that execute tasks concurrently across multiple processors or computers. It includes parallel programming, distributed systems, and grid computing.",
        //   "exampleProjects": ["Parallel algorithms", "Distributed file systems", "Cluster computing frameworks"],
        //   "image": "https://example.com/parallel_distributed_computing.jpg"
        // }
      ]
    },
    
    {
      "title": "Mechanical Engineering",
      "Industries": [
        {
          "title": "Thermal Power Plants",
          "location": "Various Locations",
          "image": "https://www.nptel.ac.in/content/storage2/courses/112104118/lecture1/1.jpg",
          "rating": 4.6
        },
        {
          "title": "HVAC System Design",
          "location": "Building Engineering Firms",
          "image": "https://www.ae911truth.org/images/HVAC-4.jpg",
          "rating": 4.8
        },
        {
          "title": "Refrigeration System Manufacturing",
          "location": "Refrigeration Companies",
          "image": "https://www.achrnews.com/ext/resources/Issues/2021/10-October/BNP_MEDIA/kumgang-cold-chain/1406722277-HB_image.jpg?1634091923",
          "rating": 4.5
        }
      ]
    },
    {
      "title": "Manufacturing Engineering",
      "domain": [
        {
          "title": "CNC Machining",
          "location": "Machine Shops",
          "image": "https://www.mmsonline.com/-/media/39C0652E978844A9AC3688AB8F3666FA",
          "rating": 4.7
        },
        {
          "title": "Robotics Automation",
          "location": "Manufacturing Plants",
          "image": "https://img.icons8.com/color/452/robot.png",
          "rating": 4.9
        },
        {
          "title": "3D Printing",
          "location": "Additive Manufacturing Companies",
          "image": "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/03/impresora-3d.jpg?itok=y_voyM5X",
          "rating": 4.6
        }
      ]
    },
    {
      "title": "Fluid Mechanics and Hydraulics",
      "Industries": [
        {
          "title": "Hydraulic Systems Design",
          "location": "Hydraulic Equipment Manufacturers",
          "image": "https://www.h-y-d-r-a-u-l-i-c.com/wp-content/uploads/2016/09/600x480px-1.jpg",
          "rating": 4.4
        },
        {
          "title": "Turbine Design",
          "location": "Power Generation Companies",
          "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/SteamTurbine1.jpg/1200px-SteamTurbine1.jpg",
          "rating": 4.3
        },
      ]
    },
    {
      "title": "Information Technology",
      "Industries": [
        {
          "title": "Artificial Intelligence",
          "description": "Focuses on developing intelligent machines capable of performing tasks that typically require human intelligence. It includes areas such as machine learning, natural language processing, computer vision, and robotics.",
          "exampleProjects": ["Image recognition systems", "Chatbots", "Autonomous vehicles"],
          "image": "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Software Engineering",
          "description": "Deals with the design, development, testing, and maintenance of software systems. It involves various methodologies, tools, and practices to ensure the quality and reliability of software products.",
          "exampleProjects": ["Web application development", "Mobile app development", "Enterprise software solutions"],
          "image": "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Data Science",
          "description": "Involves extracting insights and knowledge from large volumes of data using various techniques such as data mining, statistical analysis, machine learning, and visualization.",
          "exampleProjects": ["Predictive analytics", "Big data processing", "Data-driven decision-making"],
          "image": "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1706&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Cybersecurity",
          "description": "Focuses on protecting computer systems, networks, and data from unauthorized access, attacks, and threats. It includes areas such as network security, cryptography, ethical hacking, and security policies.",
          "exampleProjects": ["Network intrusion detection systems", "Vulnerability assessments", "Security awareness training programs"],
          "image": "https://media.istockphoto.com/id/540848970/photo/hacker-attacking-internet.jpg?s=2048x2048&w=is&k=20&c=RbYLRkTB49Y01IqVSDML2Z-5iNZIHhGXHdjPIT8K59Q="
        },
        {
          "title": "Database Systems",
          "description": "Deals with the design, implementation, and management of databases to store, organize, and retrieve data efficiently. It includes relational databases, NoSQL databases, and database management systems.",
          "exampleProjects": ["Relational database design", "Data warehousing", "Database optimization"],
          "image": "https://images.unsplash.com/photo-1674049404913-2005c02245fa?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
          "title": "Computer Networks",
          "description": "Involves the study of communication protocols, network architectures, and distributed systems. It focuses on the design, implementation, and management of computer networks to facilitate data exchange and resource sharing.",
          "exampleProjects": ["LAN/WAN design", "Network security protocols", "Cloud computing architectures"],
          "image": "https://plus.unsplash.com/premium_photo-1683134238579-a7575f7eba35?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }]},

        {
    title: "MCA",
    subCategory: [
      {
        title: "Software Engineering",
        description:
          "Dealswith the design, development, testing, and maintenance of software systems. It involves various methodologies, tools, and practices to ensure the quality and reliability of software products.",
        exampleProjects: [
          "Web application development",
          "Mobile app development",
          "Enterprise software solutions",
        ],
        image:
          "https://images.unsplash.com/photo-1580894908361-967195033215?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "MBA",
    subCategory: [
      {
        title: "Finance Management",
        description:
          "Focuses on managing financial resources and investments, including financial planning, risk management, and investment analysis.",
        exampleProjects: [
          "Financial forecasting",
          "Investment portfolio management",
          "Mergers and acquisitions analysis",
        ],
        image:
          "https://images.unsplash.com/photo-1570201530184-180249457909?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "BBA",
    subCategory: [
      {
        title: "Marketing Management",
        description:
          "Involves the planning, execution, and management of marketing strategies, including market research, product development, and promotion.",
        exampleProjects: [
          "Market segmentation",
          "Product development",
          "Advertising campaign management",
        ],
        image:
          "https://images.unsplash.com/photo-1669861280358-3556c30c5f3c?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "BCA",
    subCategory: [
      {
        title: "Web Development",
        description:
          "Deals with the design, development, and maintenance of websites, including user interface, user experience, and web applications.",
        exampleProjects: [
          "Website design",
          "Web application development",
          "Front-end development",
        ],
        image:
          "https://images.unsplash.com/photo-1566810525069-6d26d181d667?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  
  {
    title: "B.Com Hons",
    subCategory: [
      {
        title: "Accounting and Finance",
        description:
          "Involves the recording, reporting, and analysis of financial transactions and the development of financial strategies for individuals, businesses, and organizations.",
        exampleProjects: [
          "Financial statement analysis",
          "Budgeting and cost management",
          "Financial risk management",
        ],
        image:
          "https://images.unsplash.com/photo-1551278649-b902b9381e34?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "Hotel Management",
    subCategory: [
      {
        title: "Hospitality Operations Management",
        description:
          "Focuses on managing all aspects of hotel operations, including front-office, housekeeping, food and beverage, and maintenance, to ensure high-quality customer service and financial success.",
        exampleProjects: [
          "Guest service training",
          "Menu development and cost control",
          "Hotel renovation and expansion planning",
        ],
        image:
          "https://images.unsplash.com/photo-1605834369287-82e61529a682?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "Travel & Tourism",
    subCategory: [
      {
        title: "Tourism Planning and Development",
        description:
          "Involves the planning, development, and management of tourism destinations, attractions, and services to promote sustainable tourism and economic growth.",
        exampleProjects: [
          "Tourism marketing and promotion",
          "Tourism product development",
          "Tourism infrastructure planning",
        ],
        image:
          "https://images.unsplash.com/photo-1596831469001-d78d263689a6?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "Agriculture",
    subCategory: [
      {
        title: "Precision Agriculture and Technology",
        description:
          "Focuses on the use of advanced technologies, including GPS, GIS, remote sensing, and automation, to improve agricultural productivity, efficiency, and sustainability.",
        exampleProjects: [
          "Precision crop management",
          "Smart irrigation systems",
          "Automated farm equipment operation",
        ],
        image:
          "https://images.unsplash.com/photo-1611355765874-a383d4b8134a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "LAW",
subCategory: [
      {
        title: "Corporate Law",
        description:
          "Deals with the legal aspects of running a business, including contracts, mergers and acquisitions, intellectual property, and compliance with regulations.",
        exampleProjects: [
          "Mergers and acquisitions",
          "Contract drafting and negotiation",
          "Intellectual property protection",
        ],
        image:
          "https://images.unsplash.com/photo-1561548848-c14a24b2690b?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "BA LLB",
    subCategory: [
      {
        title: "Civil Law",
        description:
          "Covers the legal aspects of personal rights, property, and family relationships, including contracts, torts, and family law.",
        exampleProjects: [
          "Legal research and writing",
          "Client counseling and representation",
          "Negotiation and mediation",
        ],
        image:
          "https://images.unsplash.com/photo-1523469026284-e08424a2332f?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "LLB",
    subCategory: [
      {
        title: "Criminal Law",
        description:
          "Covers the legal aspects of criminal behavior, including investigation, prosecution, defense, and sentencing.",
        exampleProjects: [
          "Legal research and writing",
          "Client counseling and representation",
          "Negotiation and mediation",
        ],
        image:
          "https://images.unsplash.com/photo-1611776242854-479c896e934e?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "B. Pharmacy",
    subCategory: [
      {
        title: "Pharmaceutical Chemistry",
        description:
          "Involves the study of the composition, structure, and reactions of drugs, including drug design, synthesis, and analysis.",
        exampleProjects: [
          "Drug discovery and development",
          "Pharmaceutical analytical techniques",
          "Medicinal chemistry research",
        ],
        image:
          "https://images.unsplash.com/photo-1573077466629-b46a96766848?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    title: "D. Pharmacy",
    subCategory: [
      {
        title: "Pharmacy Practice",
        description:
          "Covers the practical aspects of pharmacy, including patient assessment, medication therapy management, and pharmacotherapy.",
        exampleProjects: [
          "Medication therapy management plans",
          "Patient education and counseling",
          "Clinical pharmacy research",
        ],
        image:
          "https://images.unsplash.com/photo-1611355765874-a383d4b8134a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },

  ];
  

 


  useEffect(() => {
    const data = ElementData.find((item) => item.title === DATA.title  )
    
    // console.log("in the use Effect", data)
    setDetail(data.Industries)
  }, [])

  // console.log("in the useState",detail)aaa

  const renderDIndustriesDetail = ({item,index}) => {
    // console.log("in the renderIndustriesDetail", item)
    return(
      // <View style={{ margin:10, borderRadius:10, justifyContent:'center', alignItems:"center" , borderRadius:20}}>
      //   <Image source={{uri:item.image}} style={{height:300, width:300}} />
      //   <Text sty>{item.title}</Text>
      //   <Text>{item.importance}</Text>
      // </View>
      <Card  item={item}  onPress={() =>  navigation.navigate("IndustriesScreen", {
       item:item
      })}/>
    )
  }

  // console.log("check what is in the detail",  detail)
  
  return (
    
    <ScrollView showsHorizontalScrollIndicator={false}>

<HeaderComponent image ={Images.ic_back} title = {DATA.title} imagenotification ={Images.ic_bell}  onPress={()=> navigation.goBack()}/>
    
    

    <DesignCard
        title ='Let s Explore the Travel'
        desc ="Travel is younger sort is part of Education; in the older and part of Experience"
      />

      <Text style={{alignSelf:'center', fontSize:24, color:'black' , fontWeight:'400'}}> { DATA.title}</Text>
    <FlatList
    data={detail}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item,index) => `${index}`}
    renderItem={renderDIndustriesDetail}
    />
    </ScrollView>
  )
}

export default DetailComponent