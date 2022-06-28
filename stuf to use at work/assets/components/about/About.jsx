import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className='about__content'>
          
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident minus architecto recusandae deleniti rerum unde, consequatur suscipit modi repellendus eos, illo voluptate animi quod vero beatae maxime tempore debitis corporis, at magni? Autem, vel labore. Unde rerum laudantium, perspiciatis cum assumenda nisi eaque praesentium numquam alias. Quam, dolorum iure odit officiis in provident magnam assumenda, atque debitis doloribus eum, exercitationem at nesciunt laborum facere ipsa dolore odio illum eos ratione ducimus. Officiis rerum iste inventore sequi aliquid officia quis. Quae maxime libero neque illo cum sed. Nemo accusantium illo minima expedita totam tempore beatae hic, vel molestias veritatis quam cum!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About