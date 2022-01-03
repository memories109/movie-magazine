import React, {  useEffect, useState } from 'react';
import axios  from 'axios';
import { Box, Image, Center,  Badge } from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import '../Trending.scss';

export default function Trending() {

    let [hotList, setHotList] = useState([{}]);
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }

    let [params, setParams] = useState({page : 1});

    useEffect( ()=> {
       const apiUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=aea9844cb6188c7686a5bdb55f70eb2a';
       
        axios.get(apiUrl,{params})
        .then( (result)=> {
          setHotList(result.data.results);
        })
        .catch(function (error) {
          if (error.response) {
            // 요청이 이루어졌으며 서버가 2xx의 범위를 벗어나는 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
          else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          }
          else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
       
    },[]) ;

  return (
    <div> 
            <div class="example-1 card">
              <div class="wrapper">
                <div class="date">
                  <span class="day">12</span>
                  <span class="month">Aug</span>
                  <span class="year">2016</span>
                </div>
                <div class="data">
                  <div class="content">
                    <span class="author">Jane Doe</span>
                    <h1 class="title"><a href="#">Boxing icon has the will for a couple more fights</a></h1>
                    <p class="text">The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
                    <label for="show-menu" class="menu-button"><span></span></label>
                  </div>
                  <input type="checkbox" id="show-menu" />
                  <ul class="menu-content">
                    <li>
                      <a href="#" class="fa fa-bookmark-o"></a>
                    </li>
                    <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
                    <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
                  </ul>
                </div>
              </div>
            </div>
      
      {
        hotList.map( (a, i)=>{
          return (
          <Center bg='tomato' h='100px' color='white'>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' key={i}>
              <Image src={'https://image.tmdb.org/t/p/w500'+(hotList[i].poster_path)} alt={hotList[i].original_title} />

              <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                  <Badge borderRadius='full' px='2' colorScheme='teal'>
                    New
                  </Badge>
                  <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='xs'
                    textTransform='uppercase'
                    ml='2'
                  >
                    {property.beds} beds &bull; {property.baths} baths
                  </Box>
                </Box>

                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  isTruncated
                >
                  {hotList[i].title}
                </Box>

                <Box>
                  {property.formattedPrice}
                  <Box as='span' color='gray.600' fontSize='sm'>
                    / wk
                  </Box>
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < property.rating  ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                  <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                    {hotList[i].overview} 
                  </Box>
                </Box>
              </Box>
            </Box>
          </Center>
          )
        })
      }
      </div>
 
  )
}