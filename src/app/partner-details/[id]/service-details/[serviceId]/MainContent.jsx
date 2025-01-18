'use client'
import { ChevronDown, ChevronUp, Plus, Search, CircleX } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import BottomSheet from "./BottomSheet";
import { useParams, useRouter } from "next/navigation";
import { brands } from '../../../../all-partners/salonsData'
import Image from "next/image";
import { ShimmerThumbnail } from "react-shimmer-effects";
import BottomSheet2 from './BottomSheet2'
import axios from "axios";
import { serviceData } from "./ServiceData";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../../../redux/cartSlice";
import BillDetail from './cart/BillDetails'



const MainContent = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [services, setServices] = useState(serviceData.data.sub_categories);
  const [loading, setLoading] = useState(true);
  const { id, serviceId } = useParams();
  const [isDesktop, setIsDesktop] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false)
  const [salon, setSalon] = useState(null)
  const [addedServices, setAddedServices] = useState([]);
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart.cart)

  const router = useRouter()

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setShowCartModal(false)
  //   }, 2000)
  // }, [showCartModal])


  async function fetchData(salonName) {

    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/v1/salonFamily/salonDetails?salonFamilyName=${encodeURIComponent(salonName)}`);
      // console.log(id.split("-")[id.split("-").length - 1]);
      const sal = res.data.data.salons.filter((ele) => ele.id == id.split("-")[id.split("-").length - 1])[0]
      console.log({ sal });

      setSalon(sal);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  function transformURLToString(input) {
    // console.log(brands[input]);
    return brands[input]
  }

  useEffect(() => {
    fetchData(transformURLToString(id.split("-")[0]))
  }, [])

  // Detect screen width and set openIndex on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Tailwind's md breakpoint
        setIsDesktop(true);
        setOpenIndex(0); // Open the first dropdown by default in desktop
      } else {
        setIsDesktop(false);
      }
    };
    handleResize(); // Set initial state on mount
    window.addEventListener('resize', handleResize); // Add resize listener
    return () => window.removeEventListener('resize', handleResize); // Clean up listener
  }, []);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);  // Toggle the dropdown
  };

  // Fetch services from the local data (serviceData)
  const fetchServices = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios({
        method: "post",
        baseURL: `${process.env.NEXT_PUBLIC_HOST}/api/v1`,
        url: "/salon/subCategories",
        params: {
          main_category_id: serviceId.split("-")[serviceId.split("-").length - 1],
          salon_id: id.split("-")[id.split("-").length - 1]
        }
      });
      setServices(res.data.data.sub_categories);
    } catch (error) {
      console.log(error);
      alert("Could not fetch services");
    } finally {
      setLoading(false); // End loading
    }
  };

  const isServiceAddedInCart = (serviceId) => {
    const addedService = cart.filter((ele) => ele.id === serviceId)
    // console.log({addedService, cart, serviceId});
    
    return addedService.length > 0 ? true : false
  }

  useEffect(() => {
    fetchServices(); // Fetch data on mount
  }, []);

  // const handleAddService = (service) => {
  //   if (!addedServices.some((item) => item.id === service.id)) {
  //     setAddedServices((prev) => [...prev, service]);
  //   }
  // };

  return (
    <div className="w-3/4">
      
      {loading ? (
        Array.from({ length: 4 }).map((_, index) => (
          <ShimmerThumbnail key={index} height={100} rounded className={"shimmer"} />
        ))
      ) : (
        services && (
          <div className="mt-4 bg-white">
            <div className="border mx-2 flex items-center rounded-md p-2">
              <Search size={15} className="mr-2" />
              <input
                type="text"
                placeholder="Search for service..."
                className="focus:outline-none"
              />
            </div>
            <div className="flex mt-2 mx-2 sm:justify-start justify-between gap-2">
              <button className="border rounded-md px-8 flex items-center gap-2">
                <Image src="/Men.svg" alt="img" width={12} height={12} /> Men
              </button>
              <button className="border rounded-md px-8 flex items-center gap-2">
                <Image src="/Women.svg" alt="img" width={12} height={12} /> Women
              </button>
            </div>

            <div className="mt-2">
              {services?.filter((service) => service && service.name).map((service, index) => (
                <div
                  key={index}
                  className="border-gray-500 border-b-4 border-b-gray-200 py-2"
                >
                  <div
                    className="flex justify-between items-center p-2 cursor-pointer"
                    onClick={() => toggleDropdown(index)}
                  >
                    {service.name} ({service?.services?.length || 0})
                    {openIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>

                  <div className="sm:flex sm:items-center sm:justify-start sm:flex-wrap sm:rounded-md text-gray-600 md:flex md:flex-row md:flex-wrap">
                    {service?.services
                      ?.filter((ele) => ele && ele.name)
                      .map((ele, i) => (
                        <div
                          key={i}
                          className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40" : "max-h-0"
                            } md:border-b-0 md:mx-0 px-1`}
                        >
                          <div
                            className={`p-2 flex items-center sm:mx-2 sm:m-1 sm:justify-start sm:gap-8 ${i < service.services.length - 1 ? "border-b" : ""
                              } sm:border sm:flex-wrap sm:rounded-md justify-between text-gray-600`}
                          >
                            <div>
                              {ele.gender === "Women" ? (
                                <Image src="/Women.svg" alt="img" width={15} height={15} />
                              ) : ele.gender === "Men" ? (
                                <Image
                                  src="/Men.svg"
                                  alt="img"
                                  width={12} height={12}
                                  className="text-yellow-300"
                                />
                              ) : (
                                <Image src="/Unisex.svg" alt="img" width={12} height={12} />
                              )}
                              <p className="font-medium text-[#000]">{ele.name}</p>
                              {ele.one_line_description && (
                                <p className="text-[11px] flex max-w-[80%] text-gray-500">
                                  {ele.one_line_description}
                                </p>
                              )}
                              {ele.display_rate && (
                                <p className="text-[11px] font-medium text-[#000]">
                                  From ₹{" "}
                                  {Math.round(ele.display_rate).toLocaleString("en-IN")}{" "}
                                  {ele.is_gst_included ? "GST Included" : ""}
                                </p>
                              )}
                            </div>

                            {/* Add to Cart Button */}
                            <button
                              className={`${isServiceAddedInCart(ele.id) ? "text-white bg-blue-400" : "bg-white text-blue-400"} text-[14px] sm:text-[14px] items-center font-semibold border shadow-md rounded-md px-2 flex gap-1`}
                              onClick={() => {
                                if (!ele?.customizations?.length) {
                                  if(isServiceAddedInCart(ele.id)){
                                    dispatch(removeFromCart(ele.id))
                                                                        
                                  } else {
                                    dispatch(addToCart({ ...ele, display_rate: ele.rate }))
                                    setShowCartModal(true)
                                  }
                                } else {
                                  // If customizations are present, show BottomSheet
                                  if(isServiceAddedInCart(ele.id)){
                                    dispatch(removeFromCart(ele.id))
                                                                        
                                  } else {
                                    setSelectedServiceId(ele.id);
                                  }
                                }
                              }}
                            >
                              {isServiceAddedInCart(ele.id) ? "ADDED" : "ADD"}{!isServiceAddedInCart(ele.id) && ele?.customizations?.length > 0  ? <Plus size={14} /> : ""}
                            </button>

                            {/* Render BottomSheet for Customizations */}
                            {selectedServiceId && selectedServiceId === ele.id && (
                              ele?.customizations?.length > 0 ? (
                                <BottomSheet
                                  isOpen={true}
                                  onClose={() => {
                                    setSelectedServiceId(null)
                                    setShowCartModal(true)
                                  }}
                                  service={ele}
                                  salon={salon}
                                />
                              ) : (
                                <BottomSheet2
                                  isOpen={true}
                                  onClose={() => setSelectedServiceId(null)}
                                  service={ele}
                                  salon={salon}
                                />
                              )
                            )}
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      )}

      {/* <button
        className="bg-blue-400 text-white px-4 py-2"
        onClick={() =>
          router.push(`/partner-details/${id}/service-details/${serviceId}/cart`)
        }
      >
        Go To Cart Page
      </button> */}

      {/* Add to Cart Section */}
      {/* Add to Cart Section */}
      {showCartModal && !selectedServiceId && (
        <div className="fixed bottom-2 mx-4 left-0 right-0 w-auto rounded-xl bg-white border-gray-600 p-2 shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <span>
              <p className="font-bold capitalize">{id.split("-")[0]}</p>
              <p>{cart?.length || 0} item</p>
            </span>
            <div className="flex items-center gap-2">
              <button
                className="bg-blue-400 rounded-2xl text-white px-4 py-2 mt-2"
                onClick={() =>
                  router.push(`/partner-details/${id}/service-details/${serviceId}/cart`)
                }
              >
                View Cart
              </button>

              <button
                className="text-red-400 text-sm font-semibold"
                onClick={() => setShowCartModal(false)}
              >
                <CircleX />
              </button>
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default MainContent;
