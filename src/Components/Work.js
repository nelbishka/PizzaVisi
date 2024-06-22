import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png'
import ChooseMeals from '../Assets/choose-image.png'
import DeliveryMeals from '../Assets/delivery-image.png'



const Work = () => {
  
    const workInfoData = [
        {
            image: PickMeals,
            title: "Pick Meals",
            text: "Explore our menu and choose what you like most"
        },
        {
            image: ChooseMeals,
            title: "Tell us Your Location",
            text: "Use contact section by email or phone to tell us your location"
        },
        {
            image: DeliveryMeals,
            title: "Fast Deliveries",
            text: "We offer fast deliveries for special occasions with an extra fee"
        }
    ]
  
    return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How it Works</h1>
            <p className="primary-text">Steps of ordering from the website</p>
        </div>

        <div className='work-section-bottom'>
            {workInfoData.map((data) =>(
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.text}</p>
                </div>
            )

            )}
        </div>
    </div>
  )
}

export default Work