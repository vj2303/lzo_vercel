import React from 'react'
import Navbar from '../../../../../../../components/Navbar'
import Footer from '../../../../../../../components/Footer'
// import OfferCard from './OfferCard'
import axios from 'axios'
// import { offerData } from '../../ServiceData'
import OfferList from "./OfferList"

const fetchOffers = async (id) => {
  if (!id) {
    console.log("Provide the salon id to fetch the offers");
    return null
  }
  // console.log({ id: id.split("-")[id.split("-").length - 1] });

  try {
    const res = await axios({
      method: "post",
      baseURL: process.env.NEXT_PUBLIC_HOST,
      url: `/api/v1/salon/details?salon_id=${Number(id.split("-")[id.split("-").length - 1])}`,
    })
    console.log({ res });

    return res.data.data.salons.luzo_offers
  } catch (error) {
    console.log(error)
    return null
  }
}

const page = async ({ params, searchParams }) => {
  const { id } = params
  const offers = await fetchOffers(id)
  // const offers = offerData.data.salons.luzo_offers
  return (
    <div>
      <Navbar />
      <OfferList offers={offers} />
      <Footer />
    </div>
  )
}

export default page