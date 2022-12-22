import React from 'react'
import CardItem from '../CardItem/CardItem'
import './CardList.scss';




export default function CardList({data}) {

  return (
    <div className="container-list">
      {data?.map((item,i)=><CardItem   item={item} key={i}/>)}
    </div>
  )
}
